import { createSlice } from "@reduxjs/toolkit";
import db from "../../../db.json";

export type Policy = {
    id: number;
    title: string;
    content: string;
};

const policySlice = createSlice({
    name: "policies",
    initialState: {
        items: db.policies as Policy[],
    },
    reducers: {},
});

export default policySlice.reducer;