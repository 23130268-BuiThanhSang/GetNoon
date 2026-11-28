
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Category} from "./CategoriesSlice.tsx";

export type Meal = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    isFeatured: boolean;
    sizeIds?:number[];
    toppingIds?:number[];
};

const mealSlice = createSlice({
    name: "meals",
    initialState: {
        items: [] as Meal[],
        categories: [] as Category[],
        category: "all",
        priceRange: "all",
    },
    reducers: {
        setMeals: (state, action: PayloadAction<Meal[]>) => {
            state.items = action.payload;
        },
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
        }
    }
});

export const { setMeals } = mealSlice.actions;

export default mealSlice.reducer;
