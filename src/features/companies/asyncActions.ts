import axios from '@/libs/axios/http';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getcompaniesData: any = createAsyncThunk("api/companies", async () => {
    try {
        const response = await axios.get("/companies");
        return response.data;
    } catch (error) {
        console.log({error});
    };
});
