import { createSlice } from "@reduxjs/toolkit"


const movieSlice =createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        videoTrailer: null,
        popularMovies: null,
        upcommingMovies: null,
        topRatedMovies: null,
    },
    reducers:{
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcommingMovies : (state, action) => {
            state.upcommingMovies = action.payload;
        },
        addtopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addVideoTrailer:(state, action) =>{
            state.videoTrailer = action.payload;
        },
    },
});

export const {addNowPlayingMovies, addVideoTrailer, addPopularMovies, addUpcommingMovies, addtopRatedMovies} = movieSlice.actions; 
export default movieSlice.reducer;