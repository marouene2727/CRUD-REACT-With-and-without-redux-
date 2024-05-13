import { createSlice } from "@reduxjs/toolkit";

let initialState = {

moviesRedux: [{
    // "title": "Film 1 ",
    // "year": "1234",
    // "img": "placeholder.jpg",
    // "genre": "Action 1234",
    // "description": "1234"
  }],
selectedMovie: {},
errors: "",
};
 export const moviesSlice = createSlice({ 
name: "movies",
initialState,
reducers: {


addMovieReduxx(state,action){
    const moviePayload = action.payload;
    console.log("movie",moviePayload);
    state.moviesRedux.push(moviePayload);
},

updateMovieReduxx(state,action){
    const moviePayload = action.payload;
    console.log("moviePayload",moviePayload);
    const existMovie = state.moviesRedux.findIndex(movie => movie.id === moviePayload.id);
    console.log("existMovie",existMovie);
    if(existMovie){
        state.moviesRedux[existMovie]=moviePayload;
    }
},

deleteMovieReduxx(state, action){

    const moviePayload = action.payload;

    const existMovie = state.moviesRedux.findIndex(movie => movie.id === moviePayload.id);
    if(existMovie){
        state.moviesRedux.splice(existMovie,1);
    }


}


},
});


export const {
addMovieReduxx,
updateMovieReduxx,
deleteMovieReduxx
} = moviesSlice.actions;
