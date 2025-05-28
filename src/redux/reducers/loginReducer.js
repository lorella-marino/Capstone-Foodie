import { LOGIN } from "../actions";

const initialState = {
  token: localStorage.getItem("token") || "",
  username: localStorage.getItem("username") || "",
  roles: JSON.parse(localStorage.getItem("roles")) || "",
  nome: localStorage.getItem("nome") || "",
  email: localStorage.getItem("email") || "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("roles", JSON.stringify(action.payload.roles));
      localStorage.setItem("nome", action.payload.nome);
      localStorage.setItem("email", action.payload.email);
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        roles: action.payload.roles,
        nome: action.payload.nome,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default loginReducer;
