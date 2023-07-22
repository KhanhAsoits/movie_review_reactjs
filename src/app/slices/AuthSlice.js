import {createAsyncThunk} from '@reduxjs/toolkit'
import {LOGIN_PREFIX, REGISTER_PREFIX} from "../../contants/auth.const";
import {HTTP_STATUS} from "../../contants/https.const";
import {createThunkSlice} from "../../utils/createThunkSlice";
import {login, register} from "../../services/AuthService";
import {renderToStaticMarkup} from "react-dom/server";

const initState = {
    authData: {}, _draft: {
        isLoggedIn: false, isLogging: false, isRegistering: false
    }
}
const authSlice = createThunkSlice("authSlice", initState, (builder) => {
    builder.addCase(loginThunk.pending, (state, action) => {
        state._draft.isLogging = true;
    }).addCase(loginThunk.fulfilled, (state, {payload}) => {
        state._draft.isLogging = false;
        state.authData = payload;
        state._draft.isLoggedIn = true;
        localStorage.setItem("auth", JSON.stringify({email: payload.email, password: payload.password}))
    }).addCase(loginThunk.rejected, (state) => {
        state._draft.isLogging = false;
    })
    builder.addCase(registerThunk.pending, (state) => {
        state._draft.isRegistering = true;
    }).addCase(registerThunk.fulfilled, (state, {payload}) => {
        state._draft.isRegistering = false;
        state.authData = payload;
        state.isLoggedIn = true;
        localStorage.setItem("auth", JSON.stringify({email: payload.email, password: payload.password}))
    })
})


export const loginThunk = createAsyncThunk(LOGIN_PREFIX, async (loginData, {rejectWithValue}) => {
    const resp = await login(loginData);
    if (resp != null) {
        return resp;
    }
    rejectWithValue('login failed')
});
export const registerThunk = createAsyncThunk(REGISTER_PREFIX, async (authData, {rejectWithValue}) => {
    const resp = await register(authData)
    if (resp != null) {
        return resp;
    }
    rejectWithValue('register failed')
});

export default authSlice.reducer;