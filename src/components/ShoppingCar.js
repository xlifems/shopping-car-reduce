import React, { useReducer } from "react";
import { shoppingCarActions } from "../actions/shoppingCarActions";
import {
  initialState,
  shoppingCarReducer,
} from "../reducers/shoppingCarReducer";

const ShoppingCar = () => {
  const [state, dispatch] = useReducer(shoppingCarReducer, initialState);
  const handleAdd = (produc) => {
    dispatch({ type: shoppingCarActions.ADD_PRODUCT, payload: produc });
  };
  return (
    <div>
      <h1>ShoppingCar</h1>
      <h4>Products List</h4>
      {state.products.map((produc) => (
        <div key={produc.id} style={{border: '1px solid #202020', padding: '1rem', margin: '4px'}}>
          <h5>{produc.name}</h5>
          <p>${produc.price}</p>
          <button onClick={() => handleAdd(produc)}>ADD</button>
        </div>
      ))}

      <hr />
      <h4>Added Products {state.car.length}</h4>
    </div>
  );
};

export default ShoppingCar;
