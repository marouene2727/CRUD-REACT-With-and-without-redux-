import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/MoviesSlice";


export const store = configureStore({
  reducer: moviesSlice.reducer,  // accès au moviesSlices reducer    contenant les méthodes 
   

});

