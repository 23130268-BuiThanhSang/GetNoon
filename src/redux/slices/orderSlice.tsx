
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type OrderItem = {
    mealId: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
};

type Order = {
    id: string;
    items: OrderItem[];
    total: number;
    status: string;
    createdAt: string;
};

const fakeOrders: Order[] = [
    {
        id: "order-001",
        items: [
            {
                mealId: 1,
                name: "Classic Margherita Pizza",
                image: "https://cdn.dummyjson.com/recipe-images/1.webp",
                price: 85000,
                quantity: 2
            },
            {
                mealId: 2,
                name: "Vegetarian Stir-Fry",
                image: "https://cdn.dummyjson.com/recipe-images/2.webp",
                price: 55000,
                quantity: 1
            }
        ],
        total: 225000,
        status: "Completed",
        createdAt: "2026-11-12T11:30:00"
    },
    {
        id: "order-002",
        items: [
            {
                mealId: 3,
                name: "Chocolate Chip Cookies",
                image: "https://cdn.dummyjson.com/recipe-images/3.webp",
                price: 40000,
                quantity: 3
            }
        ],
        total: 120000,
        status: "Completed",
        createdAt: "2026-11-11T12:15:00"
    },
    {
        id: "order-003",
        items: [
            {
                mealId: 1,
                name: "Classic Margherita Pizza",
                image: "https://cdn.dummyjson.com/recipe-images/1.webp",
                price: 85000,
                quantity: 1
            },
            {
                mealId: 3,
                name: "Chocolate Chip Cookies",
                image: "https://cdn.dummyjson.com/recipe-images/3.webp",
                price: 40000,
                quantity: 2
            }
        ],
        total: 165000,
        status: "Completed",
        createdAt: "2026-11-10T18:45:00"
    }
];

const savedOrders = localStorage.getItem("orderHistory");

const initialOrders: Order[] = savedOrders
    ? JSON.parse(savedOrders)
    : fakeOrders;

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        items: initialOrders
    },
    reducers: {
        addOrder: (state, action: PayloadAction<OrderItem[]>) => {
            const items = action.payload;

            const newOrder: Order = {
                id: Date.now().toString(),
                items: items,
                total: items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                ),
                status: "Completed",
                createdAt: new Date().toISOString()
            };

            state.items.unshift(newOrder);
        },

        clearOrders: (state) => {
            state.items = [];
        }
    }
});

export const { addOrder, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
