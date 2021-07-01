import { TableBody, TableCell, TableRow } from "@material-ui/core";
import {useEffect, useState} from "react";
import {getProducts} from "../service/api";
import './Allproduct.css';

const Allproducts = ()=>{
    const[products,setProducts]= useState([]);

    useEffect(() => {
        getAllProducts();
        },[])
        
    const getAllProducts = async ()=>{
      const response = await getProducts();
      setProducts(response.data);
    //   console.log(response.data);
    }
    return(
        <div>
            <div className="product">
            {
                products.map(product=>(
                    <div>
                        <div className="product_name"><h3>{product.productname}</h3></div>
                        <img src={product.image}/>
                        <div className="product__price ">{product.price}</div>
                        <button>Add to Basket</button>
                    </div>
                    
                  
                ))
            }
            </div>
              
            
        </div>
       
        

       
           
    
    );
    
}
export default Allproducts;