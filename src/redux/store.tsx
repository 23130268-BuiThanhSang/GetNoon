import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
    reducer: {
        meals: mealReducer,
        cart: cartReducer,
        orders: orderReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
