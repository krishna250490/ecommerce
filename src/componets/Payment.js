import React, { useContext } from "react";
import { StateContext } from "../updateProvider";
import "./Payment.css";
import CartItem from "./CartItem";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@material-ui/core";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const { state } = useContext(StateContext);
  return (
    <div className="payment">
      <div className="payment_container">
        <h2>address : </h2>
        <div className="payment_section">
          <h3>{state.user?.email}</h3>
          <h4>ram krishna nagar gali no 5</h4>
        </div>
      </div>
      <div className="payment_container">
        <h2>Mycart : </h2>
        <div className="payment">
          {state.cartItems.map((item, index) => (
            <CartItem
              id={item.id}
              productname={item.productname}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="payment_container">
        <h2>Payment Details : </h2>
        <div className="payment_section">
          <form>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <Button variant="contained" color="primary">
              pay
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
