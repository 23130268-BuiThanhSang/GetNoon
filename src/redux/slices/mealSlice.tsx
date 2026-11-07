import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

type Meal = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};
type ApiRecipe = {
    id: number;
    name: string;
    instructions: string[];
    image: string;
    cuisine: string;
};

type ApiResponse = {
    recipes: ApiRecipe[];
};

export const fetchMeals = createAsyncThunk(
    "meals/fetchMeals",
    async () => {
        const response = await fetch("https://dummyjson.com/recipes");

        if (!response.ok) {
            throw new Error("Failed to fetch meals");
        }

        const data: ApiResponse = await response.json();

        const meals: Meal[] = data.recipes.map((recipe) => ({
            id: recipe.id,
            name: recipe.name,
            description: recipe.instructions.join(" "),
            price: Math.floor(Math.random() * 40000) + 20000,
            image: recipe.image,
            category: recipe.cuisine
        }));

        return meals;
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
