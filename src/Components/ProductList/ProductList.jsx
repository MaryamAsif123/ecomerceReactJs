import './ProductList.css'
import Card from '../Card/Card';
import React, { useState, useEffect } from 'react';


const ProductList = ({data}) => {

  const [txtSearch, setTxtSearch] = useState('');
  const handleSearch = (event) => {
    setTxtSearch(event.target.value.toLowerCase());
  };
  const filteredProduct = data.filter((product) => {
    return product.title.toLowerCase().includes(txtSearch);
  });
// const [filteredProducts, setFilteredProducts] = useState([]);
  // const handleSearch = event => {
  //     const product= data.filter(product =>
  //       product.category.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setFilteredProducts(product)
  // };


  return (
    <div>
      <input type="text" placeholder="Search by category" onChange={handleSearch} />
      {filteredProduct.map((product, index) => (
        <Card 
        key={index}
        title={product.title}
        price={product.price}
        category={product.category}
        image={product.image}
        /> 
      ))}
    </div>
  );
};

export default ProductList;
