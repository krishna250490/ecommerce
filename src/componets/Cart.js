import React, { useContext } from "react";
import { StateContext } from "../updateProvider";
import "./Product.css";
import CartItem from "./CartItem";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Cart = () => {
  const history = useHistory();
  const { state } = useContext(StateContext);
  const { dispatch } = useContext(StateContext);
  //   console.log(cartItems);
  const totalPrice = state.cartItems.reduce((total, b) => total + b.price, 0);
  console.log(totalPrice);

  return (
    <main>
      <h3>hello,{state.user?.email}</h3>
      <p>
        Total price:{" "}
        {totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Button
        onClick={(e) => history.push("/payment")}
        variant="contained"
        color="primary"
      >
        Proceed to checkout
      </Button>

      {state.cartItems.map((item, index) => (
        <CartItem
          id={item.id}
          productname={item.productname}
          image={item.image}
          price={item.price}
        />
      ))}
    </main>
  );
};
export default Cart;
