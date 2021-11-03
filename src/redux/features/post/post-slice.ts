import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
	value: string;
}

const initialState: PostState = {
	value: "InitialState",
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		posted(state, action: PayloadAction<string>) {
			state.value += action.payload;
		},
	},
});

export const { posted } = postSlice.actions;
export default postSlice.reducer;
