import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import categoryReducer from "./slices/CategoriesSlice.tsx";

export const store = configureStore({
    reducer: {
        meals: mealReducer,
        categories: categoryReducer,
        cart: cartReducer,
        orders: orderReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
