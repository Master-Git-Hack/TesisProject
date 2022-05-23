/** @format */

import { initialState } from "../../types/report/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { consume } from "../../api/consume";

export const request = consume("report");
const slice = createSlice({
	name: "report",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(request.get.pending, (state) => {
				state.status = "loading";
			})
			.addCase(request.get.fulfilled, (state, action: PayloadAction<any>) => {
				if (action.payload !== undefined) {
					state.status = "success";
					state.data = URL.createObjectURL(action.payload);
				} else {
					state.status = "failed";
					state.message = "No data found";
				}
			});
	},
});
export const {} = slice.actions;
export const getState = (state: RootState) => state.report;
export default slice.reducer;
