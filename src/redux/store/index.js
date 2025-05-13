import { configureStore } from "@reduxjs/toolkit";
import richiestaReducer from "../reducers/richiestaReducer";

const store = configureStore({
  reducer: {
    richiesta: richiestaReducer,
  },
});

export default store;
