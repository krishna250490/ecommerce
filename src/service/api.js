import axios from "axios";

const url = "http://localhost:5000/Products";

export const getProducts = async ()=>{
    return await axios.get(url);
}