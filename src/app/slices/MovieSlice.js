import {createThunkSlice} from "../../utils/createThunkSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllMovies, getBestMovies, getRecentlyMovie, getSpecialMovies} from "../../services/MovieService";

const initState = {
    recentlyMovie: [], specialMovie: [], bestMovie: [], showByTimeMovie: [], _draft: {
        isFetchingBestMovie: false, isFetchingRecentlyMovie: false, isFetchingSpecialMovie: false, alert: null
    }
}
const movieSlice = createThunkSlice('movieSlice', initState, {}, builder => {
    builder.addCase(getBestMovie.pending, (state) => {
        state._draft.isFetchingBestMovie = true;
    }).addCase(getBestMovie.fulfilled, (state, {payload}) => {
        state._draft.isFetchingBestMovie = false;
        state.bestMovie = payload;
    }).addCase(getBestMovie.rejected, (state) => {
        state._draft.isFetchingBestMovie = false;
    })
    builder.addCase(getShowingMovie.pending, (state) => {
        state._draft.isFetchingRecentlyMovie = true;
    }).addCase(getShowingMovie.fulfilled, (state, {payload}) => {
        state._draft.isFetchingRecentlyMovie = false;
        state.recentlyMovie = payload;
    }).addCase(getShowingMovie.rejected, (state) => {
        state._draft.isFetchingRecentlyMovie = false;
    })

    builder.addCase(getSpecialMovie.pending, (state) => {
        state._draft.isFetchingSpecialMovie = true;
    }).addCase(getSpecialMovie.fulfilled, (state, {payload}) => {
        state._draft.isFetchingSpecialMovie = false;
        state.specialMovie = payload;
    }).addCase(getSpecialMovie.rejected, (state) => {
        state._draft.isFetchingSpecialMovie = false;
    })
})
export const getAllMovie = createAsyncThunk("movies/getAll", async () => {
    return await getAllMovies()
})
export const getBestMovie = createAsyncThunk("movies/topMovie", async () => {
    return await getBestMovies();
});
export const getShowingMovie = createAsyncThunk('movies/showingMovie', async () => {
    return await getRecentlyMovie()
})
export const getSpecialMovie = createAsyncThunk('movies/specialMovie', async () => {
    return await getSpecialMovies();
})
export default movieSlice.reducer;