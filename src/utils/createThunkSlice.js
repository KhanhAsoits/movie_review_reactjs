import {createSlice} from "@reduxjs/toolkit";

export const createThunkSlice = (name, initState, thunkReducer) => {
    return createSlice({
        initialState: initState, name: name, reducers: {
            defaultAction: (state, action) => {
            }
        }, extraReducers: thunkReducer
    })
}