import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface WhyUsSlice{
    id:number;
    icon:string;
    title:string;
    text:string;
}

const whyUsSlice = createSlice({
    name:"whyUs",
    initialState:{items:[] as WhyUsSlice[], loading: false},
    reducers:{
        setWhyUs: (state, action: PayloadAction<WhyUsSlice[]>) => {
            state.items = action.payload;
        }
    }
});

export const {setWhyUs} = whyUsSlice.actions;
export default whyUsSlice.reducer;