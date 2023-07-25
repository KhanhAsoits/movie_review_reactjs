import {createSlice} from '@reduxjs/toolkit'

export const createThunkSlice = (name, initState, reducers = {
    defaultAction: (state, action) => {
    }
}, thunkReducer) => {
    return createSlice({
        initialState: initState,
        name: name,
        reducers: reducers,
        extraReducers: thunkReducer,
    })
}
