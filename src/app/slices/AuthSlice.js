import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LOGIN_PREFIX, REGISTER_PREFIX } from '../../contants/auth.const'
import { login, register } from '../../services/AuthService'

const initState = {
  authData: {},
  _draft: {
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
    setAlert: (state, { payload }) => {
      state._draft.alert = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state._draft.isLogging = true
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state._draft.isLogging = false
        state.authData = payload
        state._draft.isLoggedIn = true
        localStorage.setItem(
          'auth',
          JSON.stringify({ email: payload.email, password: payload.password }),
        )
        state._draft.alert = { type: 'success', msg: 'Login success.' }
      })
      .addCase(loginThunk.rejected, (state) => {
        state._draft.isLogging = false
        state._draft.alert = { type: 'error', msg: 'Login failed.' }
      })
    builder
      .addCase(registerThunk.pending, (state) => {
        state._draft.isRegistering = true
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state._draft.isRegistering = false
        state.authData = payload
        state.isLoggedIn = true
        state._draft.alert = { type: 'success', msg: 'Register  success.' }
        localStorage.setItem(
          'auth',
          JSON.stringify({ email: payload.email, password: payload.password }),
        )
      })
      .addCase(registerThunk.rejected, (state) => {
        state._draft.isRegistering = false
        state._draft.alert = { type: 'error', msg: 'Register  failed.' }
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
  async (loginData, { rejectWithValue }) => {
    await delay(2000)
    const resp = await login(loginData)
    if (resp != null) {
      return resp
    }
    rejectWithValue('login failed')
  },
)
export const registerThunk = createAsyncThunk(
  REGISTER_PREFIX,
  async (authData, { rejectWithValue }) => {
    await delay(2000)
    const resp = await register(authData)
    if (resp != null) {
      return resp
    }
    rejectWithValue('register failed')
  },
)

const { actions } = authSlice

export const { setAlert } = actions
export default authSlice.reducer
