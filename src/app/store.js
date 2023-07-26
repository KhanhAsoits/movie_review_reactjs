import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./slices/AuthSlice";
import movieSlice from "./slices/MovieSlice";
import ticketSlice from "./slices/TicketSlice";

export default configureStore({
    reducer: {
        authentication: authSlice,
        movie: movieSlice,
        ticket: ticketSlice
    }
})