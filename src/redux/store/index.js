import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "../reducers/locationReducer";
import loginReducer from "../reducers/loginReducer";
import menuReducer from "../reducers/menuReducer";
import carrelloReducer from "../reducers/carrelloReducer";
import paymentReducer from "../reducers/paymentSlice";
import emailReducer from "../reducers/emailReducer";

const mainReducer = combineReducers({
  contatto: emailReducer,
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
