import { shoppingCarActions } from "../actions/shoppingCarActions";

export const initialState = {
  products: [
    {
      id: 1,
      name: "Product one",
      price: "3000",
    },
    {
      id: 2,
      name: "Product two",
      price: "2000",
    },
    {
      id: 3,
      name: "Product two",
      price: "2000",
    },
    {
      id: 4,
      name: "Product two",
      price: "2000",
    },
  ],
  car: [],
};

export const shoppingCarReducer = (state, action) => {
  switch (action.type) {
    case shoppingCarActions.ADD_PRODUCT:
      return { ...state, car: [...state.car, action.payload] };
    case shoppingCarActions.DEL_PRODUCT:
      return { ...state, car: [...state.car, action.payload] };
    case shoppingCarActions.DEL_ALL_PRODUCTS:
      return { ...state, car: [...state.car, action.payload] };
    default:
      return state;
  }
};
