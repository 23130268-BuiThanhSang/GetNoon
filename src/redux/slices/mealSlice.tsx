
import { createSlice } from "@reduxjs/toolkit";

const mockMeals = [
    {
        id: 1,
        name: "Com Tam Suon",
        description: "Broken rice with grilled pork ribs.",
        price: 35000,
        image: "/images/com-tam.jpg",
        category: "Rice",
        available: true
    },
    {
        id: 2,
        name: "Pho Bo",
        description: "Vietnamese beef noodle soup.",
        price: 40000,
        image: "/images/pho-bo.jpg",
        category: "Noodles",
        available: true
    },
    {
        id: 3,
        name: "Bun Cha",
        description: "Grilled pork with vermicelli.",
        price: 35000,
        image: "/images/bun-cha.jpg",
        category: "Noodles",
        available: true
    }
];

const mealSlice = createSlice({
    name: "meals",
    initialState: {
        items: mockMeals
    },
    reducers: {
        setMeals: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { setMeals } = mealSlice.actions;

export default mealSlice.reducer;
