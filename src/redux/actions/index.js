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

export const addLocation = (location) => async (dispatch) => {
  const res = await fetch("http://localhost:8080/api/locations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(location),
  });
  const data = await res.json();
  dispatch({ type: ADD_LOCATION_SUCCESS, payload: data });
};

export const deleteLocation = (id) => async (dispatch) => {
  await fetch(`http://localhost:8080/api/locations/${id}`, {
    method: "DELETE",
  });
  dispatch({ type: DELETE_LOCATION_SUCCESS, payload: id });
};

export const updateLocation = (id, location) => async (dispatch) => {
  const res = await fetch(`http://localhost:8080/api/locations/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(location),
  });
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
      const { token, username, role } = await res.json();

      dispatch({
        type: LOGIN,
        payload: { token, username, role },
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
    } else {
      throw new Error("Registration failed");
    }
  } catch (error) {
    console.error("Errore nella registrazione:", error);
    throw error;
  }
};
