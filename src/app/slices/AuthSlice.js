import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {LOGIN_PREFIX, REGISTER_PREFIX} from '../../contants/auth.const'
import {login, register} from '../../services/AuthService'

const initState = {
    authData: {},
    _draft: {
        isOpenLoginModal: false,
        isOpenRegisterModal: false,
        isLoggedIn: false,
        isLogging: false,
        isRegistering: false,
        alert: null,
    },
}
const authSlice = createSlice({
    name: 'authSlice',
    initialState: initState,
    reducers: {
        setAlert: (state, {payload}) => {
            state._draft.alert = payload
        },
        setIsOpenLoginModal: (state, {payload}) => {
            state._draft.isOpenLoginModal = payload;
        },
        setIsOpenRegisterModal: (state, {payload}) => {
            state._draft.isOpenRegisterModal = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state._draft.isLogging = true
            })
            .addCase(loginThunk.fulfilled, (state, {payload}) => {
                state.authData = payload
                state._draft.isLoggedIn = true
                localStorage.setItem(
                    'auth',
                    JSON.stringify({email: payload.email, password: payload.password}),
                )
                state._draft.isLogging = false
                state._draft.isOpenLoginModal = false;
                state._draft.alert = {type: 'success', msg: 'Đăng nhập thành công.'}
            })
            .addCase(loginThunk.rejected, (state) => {
                state._draft.isLogging = false
                state._draft.alert = {type: 'error', msg: 'Tài khoản hoặc mật khẩu không chính xác'}
            })
        builder
            .addCase(registerThunk.pending, (state) => {
                state._draft.isRegistering = true
            })
            .addCase(registerThunk.fulfilled, (state, {payload}) => {
                state.authData = payload
                state.isLoggedIn = true
                localStorage.setItem(
                    'auth',
                    JSON.stringify({email: payload.email, password: payload.password}),
                )
                state._draft.isRegistering = false
                state._draft.isOpenRegisterModal = false;
                state._draft.alert = {type: 'success', msg: 'Đăng ký thành công.'}
            })
            .addCase(registerThunk.rejected, (state) => {
                state._draft.isRegistering = false
                state._draft.alert = {type: 'error', msg: 'Đăng ký thất bại!Email đã được sử dụng.'}
            })
    },
})

export const delay = async (time) => {
    await new Promise((res, rej) =>
        setTimeout(() => {
            res()
        }, time),
    )
}
export const loginThunk = createAsyncThunk(
    LOGIN_PREFIX,
    async (loginData, {rejectWithValue}) => {
        await delay(2000)
        const resp = await login(loginData)
        if (resp != null) {
            return resp
        }
        rejectWithValue('login failed')
    });
export const registerThunk = createAsyncThunk(
    REGISTER_PREFIX,
    async (authData, {rejectWithValue}) => {
        await delay(2000)
        const resp = await register(authData)
        if (resp != null) {
            return resp
        }
        rejectWithValue('register failed')
    },
)

const {actions} = authSlice

export const {setAlert, setIsOpenRegisterModal, setIsOpenLoginModal} = actions
export default authSlice.reducer
