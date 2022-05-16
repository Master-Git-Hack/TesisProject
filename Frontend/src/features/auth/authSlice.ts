/** @format */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { initialState } from "../../types/auth/authStorage";
import { consume } from "../../api/consume";
import { logOut } from "../../api/auth";
export const request = consume("auth");
export const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signIn: (state, action: PayloadAction<any>) => {
			const { payload } = action;
			if (payload !== undefined) {
				const { status, Authorization, publicId, name } = payload;
				state.status = status;
				if (status.includes("success")) {
					localStorage.setItem("Authorization", Authorization);
					state.publicId = publicId;
					state.name = name;
				}
			}
		},
		signOut: (state) => {
			localStorage.removeItem("Authorization");
		},
		signUp: (state) => {},
		setStatus: (state, action: PayloadAction<any>) => {
			const { status } = action.payload;
			state.status = status !== undefined ? status : "unset";
		},
		setMessage: (state, action: PayloadAction<any>) => {
			const { message } = action.payload;
			state.message = message !== undefined ? message : "";
		},
	},
});
export const { signIn, signOut, signUp, setStatus, setMessage } = slice.actions;
export const getState = (state: RootState) => state.auth;
export default slice.reducer;
