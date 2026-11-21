import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AboutData = {
    title: string;
    subtitle: string;
    describe: string[];
    images: string[];
};

const aboutSlice = createSlice({
    name: "about",
    initialState: {
        data: null as AboutData | null,
    },
    reducers: {
        setAbout: (state, action: PayloadAction<AboutData>) => {
            state.data = action.payload;
        },
    },
});

export const { setAbout } = aboutSlice.actions;
export default aboutSlice.reducer;