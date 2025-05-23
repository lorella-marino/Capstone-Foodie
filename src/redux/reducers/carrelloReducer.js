import { ADD_TO_CART, INVIA_NOTA, REMOVE_FROM_CART, UPDATE_NOTE } from "../actions";

const initialState = {
  items: [],
};

const carrelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const exist = state.items.find(
        (item) =>
          item.id === action.payload.id && JSON.stringify(item.toppings) === JSON.stringify(action.payload.toppings)
      );

      if (exist) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && JSON.stringify(item.toppings) === JSON.stringify(action.payload.toppings)
              ? { ...item, quantità: item.quantità + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantità: 1, note: "" }],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            item.id !== action.payload.id || JSON.stringify(item.toppings) !== JSON.stringify(action.payload.toppings)
        ),
      };

    case INVIA_NOTA:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && JSON.stringify(item.toppings) === JSON.stringify(action.payload.toppings)
            ? {
                ...item,
                notaInviata: action.payload.notaInviata,
                note: "", // resetta il campo dopo invio
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
