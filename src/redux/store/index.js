import { combineReducers, configureStore } from "@reduxjs/toolkit";
import richiestaReducer from "../reducers/richiestaReducer";
import { locationReducer } from "../reducers/locationReducer";
import loginReducer from "../reducers/loginReducer";
import menuReducer from "../reducers/menuReducer";
import carrelloReducer from "../reducers/carrelloReducer";
import paymentReducer from "../reducers/paymentSlice";

const mainReducer = combineReducers({
  richiesta: richiestaReducer,
  login: loginReducer,
  location: locationReducer,
  menu: menuReducer,
  carrello: carrelloReducer,
  payment: paymentReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
