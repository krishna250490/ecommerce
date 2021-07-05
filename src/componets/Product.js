import React, { useContext } from "react";
import "./Product.css";
import { StateContext } from "../updateProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(StateContext);

  const AddToCart = (item) => {
    const { id, productname, image, price } = item;
    // console.log(item);
    dispatch({ type: "Add", item });
  };

  return (
    <div className="product">
      <div className="product_name">
        <h3>{product.productname}</h3>
      </div>
      <img src={product.image} />
      <div className="product__price ">
       <small>$</small>
       <strong>{product.price}</strong>
        
      </div>
      <button onClick={() => AddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
