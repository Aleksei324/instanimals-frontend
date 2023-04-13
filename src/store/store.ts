import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./";

export const reduxStore = configureStore({ // creando la store
  reducer: {
    userSlice: userSlice.reducer // añadimos el slice como reducer de la store
  }
})
