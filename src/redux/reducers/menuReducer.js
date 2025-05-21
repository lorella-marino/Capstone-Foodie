import { FETCH_MENU_START, FETCH_MENU_SUCCESS, FETCH_MENU_ERROR } from "../actions";

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
    default:
      return state;
  }
};

export default menuReducer;
