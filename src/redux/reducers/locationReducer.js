import {
  FETCH_LOCATIONS_SUCCESS,
  ADD_LOCATION_SUCCESS,
  DELETE_LOCATION_SUCCESS,
  UPDATE_LOCATION_SUCCESS,
} from "../actions";

const initialState = {
  list: [],
  loading: false,
  errore: null,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_SUCCESS:
      return { ...state, list: action.payload };
    case ADD_LOCATION_SUCCESS:
      return { ...state, list: [...state.list, action.payload] };
    case DELETE_LOCATION_SUCCESS:
      return { ...state, list: state.list.filter((l) => l.id !== action.payload) };
    case UPDATE_LOCATION_SUCCESS:
      return {
        ...state,
        list: state.list.map((l) => (l.id === action.payload.id ? action.payload : l)),
      };
    default:
      return state;
  }
};
