import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Notfound from "./componets/Notfound";
import Addnewproduct from "./componets/Addnewproduct";
import Cart from "./componets/Cart";
import Login from "./componets/Login";
import { auth } from "./firebase";
import { useEffect, useContext } from "react";
import { StateContext } from "./updateProvider";
import Payment from "./componets/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

function App() {
  const { dispatch } = useContext(StateContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);

      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/payment">
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
