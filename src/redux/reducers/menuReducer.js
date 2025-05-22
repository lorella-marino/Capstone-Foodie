import {
  FETCH_MENU_START,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_ERROR,
  ADD_PRODOTTO,
  DELETE_PRODOTTO,
  UPDATE_PRODOTTO,
} from "../actions";

const initialState = {
  loading: false,
  error: null,
  prodotti: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_START:
      return { ...state, loading: true, error: null };
    case FETCH_MENU_SUCCESS:
      return { ...state, loading: false, prodotti: action.payload };
    case FETCH_MENU_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ADD_PRODOTTO:
      return { ...state, prodotti: [...state.prodotti, action.payload] };
    case DELETE_PRODOTTO:
      return {
        ...state,
        prodotti: state.prodotti.filter((p) => p.id !== action.payload),
      };
    case UPDATE_PRODOTTO:
      return {
        ...state,
        prodotti: state.prodotti.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    default:
      return state;
  }
};

export default menuReducer;
