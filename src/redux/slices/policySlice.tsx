import { createSlice} from "@reduxjs/toolkit";

export type Policy = {
    id: number;
    title: string;
    content: string;
};

const policySlice = createSlice({
    name: "policy",
    initialState: {
        items: [] as Policy[],
    },
    reducers: {},
});

export default policySlice.reducer;