import { INVIA_RICHIESTA_ERRORE, INVIA_RICHIESTA_INIZIO, INVIA_RICHIESTA_SUCCESSO } from "../actions";

const initialState = {
  loading: false,
  successo: false,
  errore: null,
};

const richiestaReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVIA_RICHIESTA_INIZIO:
      return { loading: true, successo: false, errore: null };
    case INVIA_RICHIESTA_SUCCESSO:
      return { loading: false, successo: true, errore: null };
    case INVIA_RICHIESTA_ERRORE:
      return { loading: false, successo: false, errore: action.payload };
    default:
      return state;
  }
};

export default richiestaReducer;
