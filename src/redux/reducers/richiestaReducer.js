import { INVIA_RICHIESTA_ERROR, INVIA_RICHIESTA_START, INVIA_RICHIESTA_SUCCESS } from "../actions";

const initialState = {
  loading: false,
  successo: false,
  errore: null,
};

const richiestaReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVIA_RICHIESTA_START:
      return { loading: true, successo: false, errore: null };
    case INVIA_RICHIESTA_SUCCESS:
      return { loading: false, successo: true, errore: null };
    case INVIA_RICHIESTA_ERROR:
      return { loading: false, successo: false, errore: action.payload };
    case "RESET_RICHIESTA":
      return {
        ...state,
        successo: false,
        errore: null,
      };

    default:
      return state;
  }
};

export default richiestaReducer;
