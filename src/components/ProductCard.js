import React, { memo } from "react";

const ProductCard = ({ product, handleAdd, isProductCar = false }) => {
  console.log("render product item");
  return (
    <div className={isProductCar ? "card card-horizontal" : "card"}>
      <h5>{product.name}</h5>
      <figure>
        <img
          src={product.img}
          alt=""
          style={{ width: isProductCar ? "100px" : "200px", height: "auto" }}
        />
        <figcaption>$ {product.price}</figcaption>
      </figure>
      {isProductCar || <button onClick={() => handleAdd(product)}>ADD</button>}
      {isProductCar && (
        <div>
          <p>
            {product?.quantity &&
              `${"x"} ${product.quantity} = $${
                product.quantity * product.price
              }`}
          </p>
          <button onClick={() => handleAdd(product)}>-</button>
          <button onClick={() => handleAdd(product)}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default memo(ProductCard);
