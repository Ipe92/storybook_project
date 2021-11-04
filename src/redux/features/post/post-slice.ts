import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
	title: string;
	body: string;
}

const postSlice = createSlice({
	name: "post",
	initialState: [] as Post[],
	reducers: {
		posted: (state, action: PayloadAction<Post>) => {
			state.push(action.payload);
		},
	},
});

export const { posted } = postSlice.actions;
export default postSlice.reducer;
