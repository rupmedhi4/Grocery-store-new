import { createSlice } from "@reduxjs/toolkit";

const isLoginSlices = createSlice({
    name: "isLogin",
    initialState: {
        user:[],
    },

    reducers: {
        checkLogin: (state, action) => {
            state.user = action.payload
            console.log(state.user)
    },
}})


export const { checkLogin } = isLoginSlices.actions;

export default isLoginSlices.reducer;
