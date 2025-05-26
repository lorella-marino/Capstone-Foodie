import {
  FETCH_LOCATIONS,
  ADD_LOCATION,
  DELETE_LOCATION,
  UPDATE_LOCATION,
  FETCH_LOCATIONS_START,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_ERROR,
} from "../actions";

const initialState = {
  list: [],
  loading: false,
  errore: null,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return { ...state, list: action.payload, loading: false, errore: null };
    case FETCH_LOCATIONS_START:
      return { ...state, loading: true, errore: null };
    case FETCH_LOCATIONS_ERROR:
      return { ...state, loading: false, errore: action.payload };
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
