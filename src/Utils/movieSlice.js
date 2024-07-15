import { createSlice } from "@reduxjs/toolkit"


const movieSlice =createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies : null,
        videoTrailer: null,
    },
    reducers:{
        addNowPlayingMovies : (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addVideoTrailer:(state, action) =>{
            state.videoTrailer = action.payload;
        },
    },
});

export const {addNowPlayingMovies, addVideoTrailer} = movieSlice.actions; 
export default movieSlice.reducer;