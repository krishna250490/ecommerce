import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import { Route, BrowserRouter,Switch} from "react-router-dom";
import Notfound from "./componets/Notfound";
import Addnewproduct from './componets/Addnewproduct';
import Cart from "./componets/Cart";



function App() {
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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
