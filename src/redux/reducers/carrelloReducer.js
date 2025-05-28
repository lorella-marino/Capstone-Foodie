import { ADD_TO_CARRELLO, INVIA_NOTA, REMOVE_FROM_CARRELLO, UPDATE_NOTE } from "../actions";

const initialState = {
  items: [],
};

const carrelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARRELLO: {
      const exist = state.items.find(
        (item) =>
          item.id === action.payload.id && JSON.stringify(item.toppings) === JSON.stringify(action.payload.toppings)
      );

      if (exist) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && JSON.stringify(item.toppings) === JSON.stringify(action.payload.toppings)
              ? { ...item, quantita: item.quantita + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantita: 1, note: "" }],
      };
    }

    case REMOVE_FROM_CARRELLO:
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            item.id !== action.payload.id || JSON.stringify(item.toppings) !== JSON.stringify(action.payload.toppings)
        ),
      };

    case "SVUOTA_CARRELLO":
      return {
        ...state,
        items: [],
      };

    case INVIA_NOTA:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && JSON.stringify(item.toppings) === JSON.stringify(action.payload.toppings)
            ? {
                ...item,
                notaInviata: action.payload.note,
                note: "", // resetta input
              }
            : item
        ),
      };

    case UPDATE_NOTE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && JSON.stringify(item.toppings) === JSON.stringify(action.payload.toppings)
            ? { ...item, note: action.payload.note }
            : item
        ),
      };

    default:
      return state;
  }
};

export default carrelloReducer;
