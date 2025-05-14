import { LOGIN } from "../actions";

const initialState = {
  token: "",
  username: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default loginReducer;
