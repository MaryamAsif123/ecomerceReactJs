import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../../Components/ProductList/ProductList';

const Products = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
  }, []);

  return (
    <div>
      <h1>Products page</h1>
      <ProductList data={products} />
    </div>
  );
};

export default Products;
