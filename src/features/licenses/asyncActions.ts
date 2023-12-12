import axios from '@/libs/axios/http';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLicensesData: any = createAsyncThunk("api/licenses", async () => {
    try {
        const response = await axios.get("/licenses");
        return {
            licenses: response?.data,
            total: response?.data?.length,
        };
    } catch (error) {
        console.log({error});
    };
});

export const getLicensesDataWithPaginations: any = createAsyncThunk("api/licenses-paginations", async ({page, rowsPerPage}: {page: number,rowsPerPage: number}, {getState}) => {
    try {
        const { licenseState }: any = getState();
        const selectedData = licenseState.fetchData?.slice(page * +rowsPerPage, (page + 1) * +rowsPerPage);
        return selectedData;
    } catch (error) {
        console.log({error});
    };
});
