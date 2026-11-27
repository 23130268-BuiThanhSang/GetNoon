import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import categoryReducer from "./slices/CategoriesSlice.tsx";
import policyReducer from "./slices/policySlice";
import whyUsReducer from "./slices/WhyUsSlice.tsx";

export const store = configureStore({
    reducer: {
        meals: mealReducer,
        categories: categoryReducer,
        whyUs: whyUsReducer,
        cart: cartReducer,
        orders: orderReducer,
        policy: policyReducer,
    }
});

let previousCart = store.getState().cart;
store.subscribe(() => {
    const currentCart = store.getState().cart;
    if (currentCart !== previousCart) {
        previousCart = currentCart;

        localStorage.setItem(
            "cart",
            JSON.stringify(currentCart.items)
        );
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
