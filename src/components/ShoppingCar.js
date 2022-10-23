import React, { useCallback, useReducer } from "react";
import { shoppingCarActions } from "../actions/shoppingCarActions";
import {
  initialState,
  shoppingCarReducer,
} from "../reducers/shoppingCarReducer";
import ProductCard from "./ProductCard";

const ShoppingCar = () => {
  const [state, dispatch] = useReducer(shoppingCarReducer, initialState);

  const handleAdd = useCallback((produc) => {
    dispatch({ type: shoppingCarActions.ADD_PRODUCT, payload: produc });
  }, []);

  return (
    <div>
      <h1>ShoppingCar</h1>
      <h4>Products List</h4>
      <div className="grid">
        {state.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAdd={handleAdd}
          />
        ))}
      </div>

      <hr />
      <h4>Added Products {state.car.length}</h4>
    </div>
  );
};

export default ShoppingCar;
