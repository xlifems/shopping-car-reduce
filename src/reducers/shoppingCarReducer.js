import { shoppingCarActions } from "../actions/shoppingCarActions";

export const initialState = {
  products: [
    {
      id: 1,
      name: "Sony Camera",
      price: "3000",
      img: "https://media.wired.com/photos/5b64dbe6f6d47809bff3a54e/master/w_1920%2Cc_limit/sony-rx100-SOURCE-Sony.jpg",
    },
    {
      id: 2,
      name: "Monitor Gear-BenQ",
      price: "2000",
      img: "https://media.wired.com/photos/618efdf2b535bb0d53e49c97/master/w_1600,c_limit/Gear-BenQ-PD2705Q-SOURCE-BenQ.jpg",
    },
    {
      id: 3,
      name: "Usb PowerExpand-Hub",
      price: "2000",
      img: "https://media.wired.com/photos/5e84e287798a15000821fe76/master/w_1600,c_limit/Gear-Anker-USB-C-PowerExpand-Hub-SOURCE-Anker.jpg",
    },
    {
      id: 4,
      name: "Mechanical Keyborad",
      price: "2000",
      img: "https://media.wired.com/photos/62c8962bb1c3d04cf1811483/master/w_1600,c_limit/Logitech-MX-Mechanical-Mini-SOURCE-Logitech-Gear.jpg",
    },
  ],
  car: [],
};

export const shoppingCarReducer = (state, action) => {
  switch (action.type) {
    case shoppingCarActions.ADD_PRODUCT:
      const indexProduct = state.car.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexProduct >= 0) {
        const updateProduct = {
          ...state.car[indexProduct],
          quantity: state.car[indexProduct].quantity + 1,
        };
        return {
          ...state,
          car: state.car.map((product) =>
            product.id === updateProduct.id ? updateProduct : product
          ),
        };
      } else {
        return {
          ...state,
          car: [...state.car, { ...action.payload, quantity: 1 }],
        };
      }
    case shoppingCarActions.DEL_PRODUCT:
      return { ...state, car: [...state.car, action.payload] };
    case shoppingCarActions.DEL_ALL_PRODUCTS:
      return initialState;
    default:
      return state;
  }
};
