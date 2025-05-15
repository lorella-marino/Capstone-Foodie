import { combineReducers, configureStore } from "@reduxjs/toolkit";
import richiestaReducer from "../reducers/richiestaReducer";
import { locationReducer } from "../reducers/locationReducer";
import loginReducer from "../reducers/loginReducer";

const mainReducer = combineReducers({
  richiesta: richiestaReducer,
  login: loginReducer,
  location: locationReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
