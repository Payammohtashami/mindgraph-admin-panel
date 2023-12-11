"use client";
import { configureStore } from "@reduxjs/toolkit";

// RTK slices
import userReducer from '@/features/user/userSlice';


const store = configureStore({
    reducer: {
        userState: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export default store;