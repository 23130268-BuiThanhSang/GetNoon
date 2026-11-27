import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Meal} from "./mealSlice.tsx";

export type CartItem = {
    cartItemId: string;
    meal: Meal;
    quantity: number;
    selected: boolean;
};

const loadCart = (): CartItem[] => {
    try {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            return JSON.parse(savedCart) as CartItem[];
        }
    } catch (error) {
        console.error("Failed to load cart:", error);
    }

    return [];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCart()
    },
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.cartItemId !== action.payload
            );
        },

        updateQuantity: (state, action: PayloadAction<{ cartItemId: string; quantity: number }>) => {
            const item = state.items.find(
                (item) => item.cartItemId === action.payload.cartItemId
            );

            if (item && action.payload.quantity > 0) {
                item.quantity = action.payload.quantity;
            }
        },

        toggleSelection: (state, action: PayloadAction<string>) => {
            const item = state.items.find(
                (item) => item.cartItemId === action.payload
            );

            if (item) {
                item.selected = !item.selected;
            }
        },

        clearSelectedItems: (state) => {
            state.items = state.items.filter(
                (item) => !item.selected
            );
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleSelection,
    clearSelectedItems,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;