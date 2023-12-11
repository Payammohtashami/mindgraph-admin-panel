import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        first_name: 'Payam',
        last_name: 'Mohtashami',
        mobile: '+98-9180000000',
    },
    status: "idle",
    isFetching: true,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
    },
});

export default userSlice.reducer;