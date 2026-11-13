import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type Meal = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    isFeatured: boolean;
};

export const fetchMeals = createAsyncThunk(
    "meals/fetchMeals",
    async () => {
        const response = await fetch("http://localhost:3001/meals");

        if (!response.ok) {
            throw new Error("Failed to fetch meals");
        }

        const data: Meal[] = await response.json();

        return data;
    }
);


const mealSlice = createSlice({
    name: "meals",
    initialState: {
        items: [] as Meal[],
        loading: false,
        error: null as string | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Something went wrong";
            });
    }
});

export default mealSlice.reducer;
