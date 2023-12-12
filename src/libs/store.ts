"use client";
import { configureStore } from "@reduxjs/toolkit";

// RTK slices
import userReducer from '@/features/user/userSlice';
import licensesReducer from '@/features/licenses/licensesSlice';
import companiesReducer from '@/features/companies/companiesSlice';


const store = configureStore({
    reducer: {
        userState: userReducer,
        licenseState: licensesReducer,
        companiesState: companiesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export default store;