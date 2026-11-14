import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
export interface Category {
    id: number;
    name: string;
    image: string;
}
 export const fetchCategories = createAsyncThunk("categories/fetchCategories",
     async () =>{
      const response = await fetch(`http://localhost:3001/categories`);
      if (!response.ok) throw new Error("Fail to fetch categories");
      return (await response.json()) as Category[];
 });

const categorySlice = createSlice({
    name:"categories",
    initialState:{items:  [] as Category[], loading:false},
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchCategories.pending, (state) => {state.loading=true;})
            .addCase(fetchCategories.fulfilled,(state,action)=>{
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchCategories.rejected,(state)=>{state.loading=false});
    },
});
export default categorySlice.reducer;