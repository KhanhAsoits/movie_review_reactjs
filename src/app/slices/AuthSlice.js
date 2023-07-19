import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {LOGIN_PREFIX, REGISTER_PREFIX} from "../../contants/auth.const";
import {HTTP_STATUS} from "../../contants/https.const";
import {createThunkSlice} from "../../utils/createThunkSlice";

const initState = {
    /// init state
    status: HTTP_STATUS.DEFAULT, authData: {}, isLogin: false
}


// const authSlice = createSlice({
//     initialState: initState, name: 'authSlice', extraReducers: builder => {
//         builder.addCase(loginThunk.pending, (state, action) => {
//             state.status = HTTP_STATUS.PENDING;
//         }).addCase(loginThunk.fulfilled, (state, action) => {
//             // data = action.payload
//             state.status = HTTP_STATUS.DEFAULT;
//             state.authData = action.payload;
//         }).addCase(loginThunk.rejected, (state, action) => {
//             state.status = HTTP_STATUS.DEFAULT;
//         })
//     }
// })
const authSlice = createThunkSlice("authSlice", initState, (builder) => {
    builder.addCase(loginThunk.pending, (state, action) => {
        state.status = HTTP_STATUS.PENDING;
    }).addCase(loginThunk.fulfilled, (state, action) => {
        state.status = HTTP_STATUS.DEFAULT;
        state.authData = action.payload;
    })
})


export const loginThunk = createAsyncThunk(LOGIN_PREFIX, async (loginData) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
    return loginData;
})
export const registerThunk = createAsyncThunk(REGISTER_PREFIX, async (authData) => {
    // reg process
    // payload return here will get in builder
});
export default authSlice.reducer;