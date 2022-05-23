/** @format */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { initialState } from "../../types/auth/authStorage";
import { consume } from "../../api/consume";
export const request = consume("auth");
export const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signOut: (state) => {
			localStorage.removeItem("Authorization");
			localStorage.removeItem("publicId");
			localStorage.removeItem("isAdmin");
		},
		setPublic: (state) => {
			state.publicId = localStorage.getItem("publicId");
			state.isAdmin = localStorage.getItem("isAdmin")?.includes("false") ? false : true;
		},
		signUp: (state) => {},
	},
	extraReducers(builder) {
		builder
			.addCase(request.post.pending, (state) => {
				state.status = "loading";
			})
			.addCase(request.post.fulfilled, (state, action: PayloadAction<any>) => {
				const { status, message, Authorization, publicId , isAdmin} = action.payload;
				state.status = status;
				if (status.includes("success")) {
					localStorage.setItem("Authorization", Authorization);
					localStorage.setItem("publicId", publicId);
					localStorage.setItem("isAdmin",isAdmin);
				}
				if (status.includes("failed")) {
					state.message = message;
				}
			}).addCase(request.get.pending, (state) => {
				state.status = "loading";
			}).addCase(request.get.fulfilled, (state, action: PayloadAction<any>) => {
				if (localStorage.getItem("Authorization") && localStorage.getItem("publicId")) {
					const { username } = action.payload;
					if (username !== undefined) { 
						state.status = "success";
						state.name = username;
					}
					else{
						state.status = "failed";
						localStorage.removeItem("Authorization");
					}
					
				}
			})
	},
});
export const { signOut, signUp,setPublic } = slice.actions;
export const getState = (state: RootState) => state.auth;
export default slice.reducer;
