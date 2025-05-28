import {
  INVIA_EMAIL_ERROR,
  INVIA_EMAIL_START,
  INVIA_EMAIL_SUCCESS,
  INVIA_RIEPILOGO_ORDINE_ERROR,
  INVIA_RIEPILOGO_ORDINE_START,
  INVIA_RIEPILOGO_ORDINE_SUCCESS,
} from "../actions";

const initialState = {
  loading: false,
  successo: false,
  errore: null,
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVIA_EMAIL_START:
      return { loading: true, successo: false, errore: null };
    case INVIA_EMAIL_SUCCESS:
      return { loading: false, successo: true, errore: null };
    case INVIA_EMAIL_ERROR:
      return { loading: false, successo: false, errore: action.payload };
    case "RESET_EMAIL":
      return {
        ...state,
        successo: false,
        errore: null,
      };

    case INVIA_RIEPILOGO_ORDINE_START:
      return { loading: true, successo: false, errore: null };
    case INVIA_RIEPILOGO_ORDINE_SUCCESS:
      return { loading: false, successo: true, errore: null };
    case INVIA_RIEPILOGO_ORDINE_ERROR:
      return { loading: false, successo: false, errore: action.payload };

    default:
      return state;
  }
};

export default emailReducer;
