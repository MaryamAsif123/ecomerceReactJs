import React from 'react';
import './Card.css';
const Card = ({ title, price, category, image }) => {
  return (
    <div className='container'>
      <img src={image} alt=""/>
      <p>{title}</p>
      <p>{price}</p>
      <p>{category}</p>
    </div>
  );
};

export default Card;
