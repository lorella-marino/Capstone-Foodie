import { LOGIN, LOGOUT, UPDATE_PROFILE, DELETE_PROFILE } from "../actions";

const initialState = {
  token: localStorage.getItem("token") || "",
  username: localStorage.getItem("username") || "",
  roles: JSON.parse(localStorage.getItem("roles")) || "",
  nome: localStorage.getItem("nome") || "",
  cognome: localStorage.getItem("cognome") || "",
  telefono: localStorage.getItem("telefono") || "",
  email: localStorage.getItem("email") || "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("roles", JSON.stringify(action.payload.roles));
      localStorage.setItem("nome", action.payload.nome);
      localStorage.setItem("cognome", action.payload.cognome);
      localStorage.setItem("telefono", action.payload.telefono);
      localStorage.setItem("email", action.payload.email);

      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        roles: action.payload.roles,
        nome: action.payload.nome,
        cognome: action.payload.cognome,
        telefono: action.payload.telefono,
        email: action.payload.email,
      };

    case UPDATE_PROFILE:
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("nome", action.payload.nome);
      localStorage.setItem("cognome", action.payload.cognome);
      localStorage.setItem("telefono", action.payload.telefono);
      localStorage.setItem("email", action.payload.email);

      return {
        ...state,
        username: action.payload.username,
        nome: action.payload.nome,
        cognome: action.payload.cognome,
        telefono: action.payload.telefono,
        email: action.payload.email,
      };

    case DELETE_PROFILE:
    case LOGOUT:
      localStorage.clear();
      return {
        token: "",
        username: "",
        roles: "",
        nome: "",
        cognome: "",
        telefono: "",
        email: "",
      };

    default:
      return state;
  }
};

export default loginReducer;
