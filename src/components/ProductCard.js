import React, { memo } from "react";

const ProductCard = ({ product, handleAdd }) => {
    console.log('render product item');
  return (
    <div style={{ border: "1px solid #202020", padding: "1rem", margin: "4px" }}>
      <h5>{product.name}</h5>
      <figure>
        <img
          src={product.img}
          alt=""
          style={{ width: "200px", height: "auto" }}
        />
        <figcaption>$ {product.price}</figcaption>
      </figure>
      <button onClick={() => handleAdd(product)}>ADD</button>
    </div>
  );
};

export default memo (ProductCard);
