import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./componets/Navbar";
import Allproducts from "./componets/Allproducts";
import Add from "./componets/Add";
import Home from "./componets/Home";
import { Route, BrowserRouter,Switch} from "react-router-dom";
import Notfound from "./componets/Notfound";
import Addnewproduct from './componets/Addnewproduct';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/addnewproduct" component={Addnewproduct}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/allproducts" component={Allproducts} />
        <Route component={Notfound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
