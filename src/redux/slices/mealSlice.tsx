
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
        items: [] as Meal[]
    },
    reducers: {
        setMeals: (state, action: PayloadAction<Meal[]>) => {
            state.items = action.payload;
        }
    }
});

export const { setMeals } = mealSlice.actions;

export default mealSlice.reducer;
