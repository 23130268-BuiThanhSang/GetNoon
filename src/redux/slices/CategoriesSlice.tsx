import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface Category {

    id: number;
    name: string;
    image: string;
}
const categorySlice = createSlice({
    name:"categories",
    initialState:{items:  [] as Category[], loading:false},
    reducers:{
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.items = action.payload;
        }
    }
});

export const {setCategories} = categorySlice.actions;
export default categorySlice.reducer;