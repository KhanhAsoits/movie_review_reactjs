import {configureStore} from '@reduxjs/toolkit'
import authSlice from "./slices/AuthSlice";
import movieSlice from "./slices/MovieSlice";

export default configureStore({
    reducer: {
        authentication: authSlice,
        movie: movieSlice
    }
})