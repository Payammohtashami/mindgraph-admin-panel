import { createSlice } from '@reduxjs/toolkit';
import { getLicensesData, getLicensesDataWithPaginations } from './asyncActions';

export interface LicensesDataItems {
    id: number, 
    name: string, 
    companyId: number, 
    status: "used" | 'available',
};

export interface LicensesStateType {
    data: LicensesDataItems[],
    total: number
    fetchData: LicensesDataItems[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    isFetching: boolean,
};

const initialState: LicensesStateType = {
    data: [],
    total: 0,
    fetchData: [],
    status: "idle",
    isFetching: true,
};

const licensesSlice = createSlice({
    name: 'licenses',
    initialState,
    reducers: {
        addLicenses: (state: LicensesStateType , { payload }) => {
            const id = Math.floor(Math.random() * 1000);
            state.fetchData.push({...payload, id: state.fetchData?.length + 1});
            state.total = state.fetchData?.length;
        },
        deleteLicenses: (state: LicensesStateType , action) => {
            state.fetchData = state.fetchData.filter((item) => item.id !== action.payload);
            state.total = state.fetchData?.length;
        },
    },
    extraReducers: (builder) => {
        builder
            // get all licenses datas
            .addCase(getLicensesData.fulfilled, (state, { payload }) => {
                state.status = "fulfilled";
                state.isFetching = false;
                state.fetchData = payload.licenses;
                state.total = payload?.total;
            })
            .addCase(getLicensesData.pending, (state) => {
                state.status = "pending";
                state.isFetching = true;
            })
            .addCase(getLicensesData.rejected, (state) => {
                state.status = "rejected";
                state.isFetching = false;
            })

            // get licenses datas with paginations
            .addCase(getLicensesDataWithPaginations.fulfilled, (state, { payload }) => {
                state.status = "fulfilled";
                state.isFetching = false;
                state.data = payload;
            })
            .addCase(getLicensesDataWithPaginations.pending, (state) => {
                state.status = "pending";
                state.isFetching = true;
            })
            .addCase(getLicensesDataWithPaginations.rejected, (state) => {
                state.status = "rejected";
                state.isFetching = false;
            })
    },
});

export const { deleteLicenses, addLicenses } = licensesSlice.actions;
export default licensesSlice.reducer;