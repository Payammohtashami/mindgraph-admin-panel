import { createSlice } from '@reduxjs/toolkit';
import { getcompaniesData } from './asyncActions';

export interface CompaniesDataItems {
    id: number, 
    name: string, 
    companyId: number, 
    status: "used" | 'available',
};

export interface CompaniesStateType {
    data: CompaniesDataItems[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    isFetching: boolean,
};

const initialState: CompaniesStateType = {
    data: [],
    status: "idle",
    isFetching: true,
};

const userSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get companies datas
            .addCase(getcompaniesData.fulfilled, (state, { payload }) => {
                state.status = "fulfilled";
                state.isFetching = false;
                state.data = payload;
            })
            .addCase(getcompaniesData.pending, (state) => {
                state.status = "pending";
                state.isFetching = true;
            })
            .addCase(getcompaniesData.rejected, (state) => {
                state.status = "rejected";
                state.isFetching = false;
            })
    },
});

export default userSlice.reducer;