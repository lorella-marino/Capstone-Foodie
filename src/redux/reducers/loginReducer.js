import { LOGIN } from "../actions";

const initialState = {
  token: "",
  username: "",
  roles: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        roles: action.payload.roles,
      };
    default:
      return state;
  }
};

export default loginReducer;
