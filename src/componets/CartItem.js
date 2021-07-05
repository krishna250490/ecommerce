import React,{useContext} from "react";
import { StateContext } from "../updateProvider";



const CartItem = ({id,productname,image,price}) => {
    const {dispatch} = useContext(StateContext);
    const handleRemove = ({id})=>{
        dispatch({type:"Remove",id})
    }
    // console.log(item);
  return (
    <div className="product-row">
    <div className="product">
      <div className="product_name">{productname}</div>
      <img src={image} />
      <div className="product_price">{price}</div>
      <button onClick={handleRemove}>Remove From Cart</button>
    </div>
  </div>
  );
  };

  export default CartItem;