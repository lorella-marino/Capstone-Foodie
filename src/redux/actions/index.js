export const INVIA_RICHIESTA_INIZIO = "INVIA_RICHIESTA_INIZIO";
export const INVIA_RICHIESTA_SUCCESSO = "INVIA_RICHIESTA_SUCCESSO";
export const INVIA_RICHIESTA_ERRORE = "INVIA_RICHIESTA_ERRORE";

export const inviaRichiesta = (form) => async (dispatch) => {
  dispatch({ type: INVIA_RICHIESTA_INIZIO });

  try {
    const res = await fetch("http://localhost:8080/api/richieste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      dispatch({ type: INVIA_RICHIESTA_SUCCESSO });
    } else {
      dispatch({ type: INVIA_RICHIESTA_ERRORE, payload: "Errore nell'invio" });
    }
  } catch (err) {
    dispatch({ type: INVIA_RICHIESTA_ERRORE, payload: "Errore di connessione" });
  }
};
