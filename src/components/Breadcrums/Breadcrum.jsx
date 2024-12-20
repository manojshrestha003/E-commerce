import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return <div className="breadcrum">Loading...</div>; // Handle undefined `product`
  }

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{' '}
      {product.category || 'Unknown Category'} <img src={arrow_icon} alt="" />{' '}
      {product.name || 'Unknown Product'}
    </div>
  );
};

export default Breadcrum;
