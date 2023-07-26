import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {delay, setAlert} from "./AuthSlice";
import {orderTicket} from "../../services/MovieService";

const initState = {
    seat: {},
    _draft: {
        isCreatingTicket: false,
        isSuccessOrderTicket: false
    },
    alert: null,
}
const ticketSlice = createSlice({
    name: 'ticketSlice',
    initialState: initState,
    reducers: {
        setIsCreatingTicket: (state, {payload}) => {
            state._draft.isCreatingTicket = payload;
        },
        setSeat: (state, {payload}) => {
            state.seat = payload;
        },
        setAlertTicket: (state, {payload}) => {
            state.alert = payload;
        },
        setIsSuccessOrderTicket: (state, {payload}) => {
            state._draft.isSuccessOrderTicket = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(orderTicker.pending, (state) => {
            state._draft.isCreatingTicket = true;
        }).addCase(orderTicker.fulfilled, (state) => {
            state._draft.isCreatingTicket = false;
            state.alert = {type: 'success', msg: 'Đặt vé thành công'}
            state._draft.isSuccessOrderTicket = true;
        }).addCase(orderTicker.rejected, (state) => {
            state._draft.isCreatingTicket = false;
            state._draft.isSuccessOrderTicket = false;
            state.alert = {type: 'error', msg: 'Có lỗi xảy ra hãy thử lại sau'}
        })
    }
})
export const orderTicker = createAsyncThunk("ticket/order", async (data,seats) => {
    await orderTicket(data,seats)
})
const {actions, reducer} = ticketSlice;
export const {setIsCreatingTicket, setIsSuccessOrderTicket, setSeat, setAlertTicket} = actions;
export default reducer;