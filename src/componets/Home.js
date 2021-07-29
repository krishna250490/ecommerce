import { TableBody, TableCell, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getProducts } from "../service/api";
import "./Product.css";
import Product from "./Product";
import FlipMove from 'react-flip-move';

const products = [
  {
    id: "1",
    productname: "The Lean Start",
    price: 12,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  },
  {
    id: "2",
    productname: "KenWood mixer",
    price: 15,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
  },
  {
    id:"3",
    productname:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    price:199.99,
    image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
  },
  {
    id:"4",
    productname:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price:598.99,
    image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
  }
];
const Home=()=>{
  return (
    <main className="product-row">
    
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      
    </main>
  );
};
export default Home;