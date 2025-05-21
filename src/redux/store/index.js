import { combineReducers, configureStore } from "@reduxjs/toolkit";
import richiestaReducer from "../reducers/richiestaReducer";
import { locationReducer } from "../reducers/locationReducer";
import loginReducer from "../reducers/loginReducer";
import menuReducer from "../reducers/menuReducer";

const mainReducer = combineReducers({
  richiesta: richiestaReducer,
  login: loginReducer,
  location: locationReducer,
  menu: menuReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
