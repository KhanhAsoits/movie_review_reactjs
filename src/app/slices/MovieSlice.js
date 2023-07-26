import {createThunkSlice} from "../../utils/createThunkSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    getAllMovies,
    getBestMovies,
    getRecentlyMovie,
    getSpecialMovies,
    getMovieById,
    getNewMovies
} from "../../services/MovieService";
import { delay } from "./AuthSlice";
import { CACHE_SIZE_UNLIMITED } from "firebase/firestore";

const initState = {
    recentlyMovie: [], specialMovie: [], bestMovie: [], showByTimeMovie: [], movieDetail: {}, allMovies: [],clone:[], _draft: {
        isFetchingBestMovie: false, isFetchingRecentlyMovie: false, isFetchingSpecialMovie: false, alert: null,
        isFetchingMovieDetail: false, isFetchingAllMovie: false
    }
}

const movieSlice = createThunkSlice('movieSlice', initState, 
    {
       
    },
    builder => {
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
        builder.addCase(getMovieDetail.pending, (state) => {
            state._draft.isFetchingMovieDetail = true
        }).addCase(getMovieDetail.fulfilled, (state, {payload}) => {
            state._draft.isFetchingMovieDetail = false
            state.movieDetail = payload;
        }).addCase(getMovieDetail.rejected, (state) => {
            state._draft.isFetchingRecentlyMovie = false;
            state._draft.alert = {type: 'error', msg: 'Lấy dữ liệu phim thất bại'}
        })
        builder.addCase(getAllMovie.pending, (state) => {
            state._draft.isFetchingAllMovie = true
        }).addCase(getAllMovie.fulfilled, (state, {payload}) => {
            state._draft.isFetchingAllMovie = false;
            state.allMovies = payload;
        }).addCase(getAllMovie.rejected, (state) => {
            state._draft.isFetchingAllMovie = false;
        })
        builder.addCase(filterMovie.pending,(state)=>{
            state._draft.isFetchingAllMovie = true;
        }).addCase(filterMovie.fulfilled,(state,{payload})=>{
            state._draft.isFetchingAllMovie = false;
            state.allMovies = payload;
        })

})

export const filterMovie = createAsyncThunk("movie/filter",async({type_})=>{
    switch(type_){
        case 'allMovies':
            return await getAllMovies()
        case 'best':
                return await getBestMovies();
        case 'new':
            return await getNewMovies();
            case 'recently':
                return await getRecentlyMovie();
    }
})
export const getAllMovie = createAsyncThunk("movies/getAll", async () => {
    return await getAllMovies()
})
export const getMovieDetail = createAsyncThunk("movies/detail", async (id) => {
    return await getMovieById(id)
})
export const getBestMovie = createAsyncThunk("movies/topMovie", async () => {
    return await getBestMovies();
});
export const getShowingMovie = createAsyncThunk('movies/showingMovie', async () => {
    return await getRecentlyMovie()
})
export const getNewMovie = createAsyncThunk('movies/new',async()=>{
    return await getNewMovies()
})
export const getSpecialMovie = createAsyncThunk('movies/specialMovie', async () => {
    return await getSpecialMovies();
})
export default movieSlice.reducer;