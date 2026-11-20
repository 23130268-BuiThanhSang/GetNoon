import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import categoryReducer from "./slices/CategoriesSlice.tsx";
import policyReducer from "./slices/policySlice";

export const store = configureStore({
    reducer: {
        meals: mealReducer,
        categories: categoryReducer,
        cart: cartReducer,
        orders: orderReducer,
        policy: policyReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
