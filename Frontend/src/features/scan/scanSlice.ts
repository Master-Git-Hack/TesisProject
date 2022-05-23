import {
    initialState
} from "../../types/scan/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { consume } from "../../api/consume";

export const request = consume("scan");
const slice = createSlice({
    name: "scan",
    initialState,
    reducers: {

    }
});
export const { } = slice.actions;
export const getState = (state: RootState) => state.scan;
export default slice.reducer;