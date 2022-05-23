/** @format */

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import scanReducer from "../features/scan/scanSlice";
import reportReducer from "../features/report/reportSlice";
export const store = configureStore({
	reducer: {
		auth: authReducer,
		scan: scanReducer,
		report: reportReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
