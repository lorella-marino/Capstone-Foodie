export const INVIA_EMAIL_START = "INVIA_EMAIL_START";
export const INVIA_EMAIL_SUCCESS = "INVIA_EMAIL_SUCCESS";
export const INVIA_EMAIL_ERROR = "INVIA_EMAIL_ERROR";

export const inviaEmail = (form) => async (dispatch) => {
  dispatch({ type: INVIA_EMAIL_START });

  try {
    const res = await fetch("http://localhost:8080/api/email/contatto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      dispatch({ type: INVIA_EMAIL_SUCCESS });
      return { success: true };
    } else {
      dispatch({ type: INVIA_EMAIL_ERROR, payload: "Errore nell'invio" });
      return { success: false };
    }
  } catch {
    dispatch({ type: INVIA_EMAIL_ERROR, payload: "Errore di connessione" });
    return { success: false };
  }
};

export const INVIA_RIEPILOGO_ORDINE_START = "INVIA_RIEPILOGO_ORDINE_START";
export const INVIA_RIEPILOGO_ORDINE_SUCCESS = "INVIA_RIEPILOGO_ORDINE_SUCCESS";
export const INVIA_RIEPILOGO_ORDINE_ERROR = "INVIA_RIEPILOGO_ORDINE_ERROR";

export const inviaRiepilogoOrdine = (ordine) => async (dispatch) => {
  dispatch({ type: INVIA_RIEPILOGO_ORDINE_START });

  try {
    const res = await fetch("http://localhost:8080/api/email/ordine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ordine),
    });

    if (res.ok) {
      dispatch({ type: INVIA_RIEPILOGO_ORDINE_SUCCESS });
      return { success: true };
    } else {
      dispatch({ type: INVIA_RIEPILOGO_ORDINE_ERROR, payload: "Errore nell'invio del riepilogo" });
      return { success: false };
    }
  } catch {
    dispatch({ type: INVIA_RIEPILOGO_ORDINE_ERROR, payload: "Errore di connessione" });
    return { success: false };
  }
};

export const FETCH_LOCATIONS = "FETCH_LOCATIONS";
export const ADD_LOCATION = "ADD_LOCATION";
export const DELETE_LOCATION = "DELETE_LOCATION";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const FETCH_LOCATIONS_START = "FETCH_LOCATIONS_START";
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_ERROR = "FETCH_LOCATIONS_ERROR";

export const fetchLocations = () => async (dispatch) => {
  dispatch({ type: FETCH_LOCATIONS_START });
  try {
    console.log("Fetch locations started");
    const res = await fetch("http://localhost:8080/api/locations");
    if (!res.ok) throw new Error("Errore nella fetch delle locations");
    const data = await res.json();
    console.log("Fetch locations success", data);
    dispatch({ type: FETCH_LOCATIONS, payload: data });
  } catch (error) {
    console.error("Fetch locations error:", error.message);
    dispatch({ type: FETCH_LOCATIONS_ERROR, payload: error.message });
  }
};

export const addLocation = (location) => async (dispatch, getState) => {
  const token = getState().login.token;

  const res = await fetch("http://localhost:8080/api/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(location),
  });

  if (!res.ok) {
    console.error("Errore nella creazione:", await res.text());
    return;
  }

  const data = await res.json();
  dispatch({ type: ADD_LOCATION, payload: data });
};

export const deleteLocation = (id) => async (dispatch, getState) => {
  const token = getState().login.token;

  const res = await fetch(`http://localhost:8080/api/locations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.error("Errore nella cancellazione:", await res.text());
    return;
  }

  dispatch({ type: DELETE_LOCATION, payload: id });
};

export const updateLocation = (id, location) => async (dispatch, getState) => {
  const token = getState().login.token;

  const res = await fetch(`http://localhost:8080/api/locations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(location),
  });

  if (!res.ok) {
    console.error("Errore nella modifica:", await res.text());
    return;
  }

  const data = await res.json();
  dispatch({ type: UPDATE_LOCATION, payload: data });
};

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      const { token, username, roles, nome, cognome, telefono, email } = await res.json();

      dispatch({
        type: LOGIN,
        payload: { token, username, roles, nome, cognome, telefono, email },
      });

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("nome", nome);
      localStorage.setItem("email", email);

      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false };
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      dispatch({ type: REGISTER });
      return { success: true };
    } else {
      const err = await res.text();
      console.error("Errore backend:", err);
      return { success: false };
    }
  } catch (error) {
    console.error("Errore nella registrazione:", error);
    return { success: false };
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const DELETE_PROFILE = "DELETE_PROFILE";

export const updateProfile = (formData, token) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/auth/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const updated = await res.json();
      dispatch({
        type: UPDATE_PROFILE,
        payload: updated,
      });

      localStorage.setItem("nome", updated.nome);
      localStorage.setItem("email", updated.email);
      localStorage.setItem("username", updated.username);

      return { success: true };
    } else {
      const errorText = await res.text();
      console.error("Errore aggiornamento:", errorText);
      return { success: false, message: errorText };
    }
  } catch (error) {
    console.error("Errore update:", error);
    return { success: false, message: error.message };
  }
};

export const deleteProfile = () => async (dispatch, getState) => {
  const token = getState().login.token;

  try {
    const res = await fetch("http://localhost:8080/api/auth/delete", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      dispatch({ type: DELETE_PROFILE });
      localStorage.clear();
      return { success: true };
    } else {
      const errorText = await res.text();
      console.error("Errore nella cancellazione:", errorText);
      return { success: false };
    }
  } catch (error) {
    console.error("Errore di rete nella cancellazione:", error);
    return { success: false };
  }
};

export const FETCH_MENU_START = "FETCH_MENU_START";
export const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
export const FETCH_MENU_ERROR = "FETCH_MENU_ERROR";

export const fetchMenu = () => async (dispatch) => {
  dispatch({ type: FETCH_MENU_START });
  try {
    const res = await fetch("http://localhost:8080/api/menu");
    if (!res.ok) throw new Error("Errore nella fetch del menu");
    const data = await res.json();
    dispatch({ type: FETCH_MENU_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_MENU_ERROR, payload: error.message });
  }
};

export const ADD_TO_CARRELLO = "ADD_TO_CARRELLO";
export const REMOVE_FROM_CARRELLO = "REMOVE_FROM_CARRELLO";
export const SVUOTA_CARRELLO = "SVUOTA_CARRELLO";

export const addToCarrello = (prodotto) => {
  const prezzoToppings = prodotto.toppings?.reduce((acc, t) => acc + t.prezzo, 0) || 0;
  const prezzoTotale = prodotto.prezzo + prezzoToppings;

  return {
    type: ADD_TO_CARRELLO,
    payload: {
      ...prodotto,
      prezzo: prezzoTotale,
    },
  };
};

export const removeFromCarrello = (id, toppings) => ({
  type: REMOVE_FROM_CARRELLO,
  payload: { id, toppings },
});

export const svuotaCarrello = () => ({
  type: SVUOTA_CARRELLO,
});

export const INVIA_NOTA = "INVIA_NOTA";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const inviaNota = (id, toppings, note) => ({
  type: INVIA_NOTA,
  payload: { id, toppings, note },
});

export const updateNote = (id, toppings, note) => ({
  type: UPDATE_NOTE,
  payload: { id, toppings, note },
});

export const ADD_PRODOTTO = "ADD_PRODOTTO";
export const DELETE_PRODOTTO = "DELETE_PRODOTTO";
export const UPDATE_PRODOTTO = "UPDATE_PRODOTTO";

export const addProdotto = (formData, file) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:8080/api/menu?sezioneMenu=${formData.sezioneMenu}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nome: formData.nome,
        descrizione: formData.descrizione,
        prezzo: formData.prezzo,
        calorie: formData.calorie,
      }),
    });

    if (!res.ok) throw new Error("Errore nella creazione del prodotto");

    const nuovoProdotto = await res.json();
    dispatch({ type: "ADD_PRODOTTO", payload: nuovoProdotto });

    if (file) {
      const formImg = new FormData();
      formImg.append("file", file);

      const uploadImg = await fetch(`http://localhost:8080/api/menu/${nuovoProdotto.id}/immagine`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formImg,
      });

      if (!uploadImg.ok) throw new Error("Errore upload immagine");

      dispatch(fetchMenu());
    }

    return nuovoProdotto;
  } catch (error) {
    dispatch({ type: "MENU_ERROR", payload: error.message });
    console.error("Errore addProdotto:", error);
  }
};

export const deleteProdotto = (id) => async (dispatch, getState) => {
  const token = getState().login.token;

  const res = await fetch(`http://localhost:8080/api/menu/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.error("Errore eliminazione:", await res.text());
    return;
  }

  dispatch({ type: DELETE_PRODOTTO, payload: id });
};
export const updateProdotto = (id, data, file) => async (dispatch) => {
  dispatch({ type: "MENU_LOADING" });

  try {
    await fetch(`http://localhost:8080/api/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      await fetch(`http://localhost:8080/api/menu/${id}/immagine`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
    }

    dispatch(fetchMenu());
  } catch (error) {
    dispatch({ type: "MENU_ERROR", payload: error.message });
  }
};
