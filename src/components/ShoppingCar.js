import React, { useCallback, useReducer } from "react";
import { shoppingCarActions } from "../actions/shoppingCarActions";
import {
  initialState,
  shoppingCarReducer,
} from "../reducers/shoppingCarReducer";
import ProductCard from "./ProductCard";

const ShoppingCar = () => {
  const [state, dispatch] = useReducer(shoppingCarReducer, initialState);

  const handleAdd = useCallback((product) => {
    dispatch({ type: shoppingCarActions.ADD_PRODUCT, payload: product });
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
      {state.car.map((product, index) => (
        <ProductCard key={index} product={product} isProductCar={true}/>
      ))}
    </div>
  );
};

export default ShoppingCar;
