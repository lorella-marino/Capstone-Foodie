/* import axios from "axios"; */

export const INVIA_RICHIESTA_START = "INVIA_RICHIESTA_START";
export const INVIA_RICHIESTA_SUCCESS = "INVIA_RICHIESTA_SUCCESS";
export const INVIA_RICHIESTA_ERROR = "INVIA_RICHIESTA_ERROR";

export const inviaRichiesta = (form) => async (dispatch) => {
  dispatch({ type: INVIA_RICHIESTA_START });

  try {
    const res = await fetch("http://localhost:8080/api/richieste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      dispatch({ type: INVIA_RICHIESTA_SUCCESS });
    } else {
      dispatch({ type: INVIA_RICHIESTA_ERROR, payload: "Errore nell'invio" });
    }
  } catch {
    dispatch({ type: INVIA_RICHIESTA_ERROR, payload: "Errore di connessione" });
  }
};

export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const ADD_LOCATION_SUCCESS = "ADD_LOCATION_SUCCESS";
export const DELETE_LOCATION_SUCCESS = "DELETE_LOCATION_SUCCESS";
export const UPDATE_LOCATION_SUCCESS = "UPDATE_LOCATION_SUCCESS";

export const fetchLocations = () => async (dispatch) => {
  const res = await fetch("http://localhost:8080/api/locations");
  const data = await res.json();
  dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: data });
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
  dispatch({ type: ADD_LOCATION_SUCCESS, payload: data });
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

  dispatch({ type: DELETE_LOCATION_SUCCESS, payload: id });
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
  dispatch({ type: UPDATE_LOCATION_SUCCESS, payload: data });
};

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      const { token, username, roles } = await res.json();

      dispatch({
        type: LOGIN,
        payload: { token, username, roles },
      });

      localStorage.setItem("token", token);

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

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (prodotto) => ({
  type: ADD_TO_CART,
  payload: prodotto,
});

export const removeFromCart = (id, toppings) => ({
  type: REMOVE_FROM_CART,
  payload: { id, toppings },
});

export const updateNote = (id, note) => ({
  type: UPDATE_NOTE,
  payload: { id, note },
});
