import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/post-slice";

export const store = configureStore({
	reducer: {
		post: postReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
