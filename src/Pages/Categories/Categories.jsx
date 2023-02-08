import React, {useEffect, useState} from "react";
import ProductList from "../../Components/ProductList/ProductList";
import axios from 'axios';
import { Link } from "react-router-dom";
const Categories=()=>{
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(res => {
        setProducts(res.data);
        // console.log(res.data);
      })
  }, []);
    return(
        <div>
            <h1>Categories Page</h1>
            {products.map((product, index) => (
            <Link >
            {product} <br/>
            </Link> 
        
      ))}
        </div>
    )
}
export default Categories;