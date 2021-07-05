import React, { useContext } from "react";
import { StateContext } from "../updateProvider";
import "./Product.css";
import CartItem from "./CartItem";
import CurrencyFormat from "react-currency-format";




const Cart = () => {
  const { cartItems } = useContext(StateContext);
  const { dispatch } = useContext(StateContext);
//   console.log(cartItems);
const totalPrice = cartItems.reduce((total, b) => total + b.price, 0);
  console.log(totalPrice)

  return (
    <main>
     <p>
        Total price:{" "}
        {totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "USD"
        })}
      </p>
    
      {
        cartItems.map((item,index) => (
        <CartItem  id={item.id} 
        productname={item.productname} 
        image={item.image} price={item.price}  />
      ))
      }
    </main>
  );
};
export default Cart;
