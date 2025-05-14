import { configureStore } from "@reduxjs/toolkit";
import richiestaReducer from "../reducers/richiestaReducer";
import { locationReducer } from "../reducers/locationReducer";
import loginReducer from "../reducers/loginReducer";

const store = configureStore({
  reducer: {
    richiesta: richiestaReducer,
    login: loginReducer,
    location: locationReducer,
  },
});

export default store;
