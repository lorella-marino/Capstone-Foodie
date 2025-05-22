import { FETCH_LOCATIONS, ADD_LOCATION, DELETE_LOCATION, UPDATE_LOCATION } from "../actions";

const initialState = {
  list: [],
  loading: false,
  errore: null,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return { ...state, list: action.payload };
    case ADD_LOCATION:
      return { ...state, list: [...state.list, action.payload] };
    case DELETE_LOCATION:
      return { ...state, list: state.list.filter((l) => l.id !== action.payload) };
    case UPDATE_LOCATION:
      return {
        ...state,
        list: state.list.map((l) => (l.id === action.payload.id ? action.payload : l)),
      };
    default:
      return state;
  }
};
