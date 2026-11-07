
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type OrderItem = {
    mealId: number;
    name: string;
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

const savedOrders = localStorage.getItem("orderHistory");

const initialOrders: Order[] = savedOrders
    ? JSON.parse(savedOrders)
    : [];

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
