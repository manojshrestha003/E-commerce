import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  // Handle undefined product
  if (!product) {
    return <div className="product-display">Loading product...</div>;
  }

  return (
    <div className="product-display">
      <div className="productDisplay-left">
        <div className="productDisplayImage-list">
          <img src={product.image || 'default-image-url.jpg'} alt={product.name || 'Product'} />
          <img src={product.image || 'default-image-url.jpg'} alt={product.name || 'Product'} />
          <img src={product.image || 'default-image-url.jpg'} alt={product.name || 'Product'} />
          <img src={product.image || 'default-image-url.jpg'} alt={product.name || 'Product'} />
        </div>
        <div className="productDisplay-image">
          <img
            className="productDisplay-main-img"
            src={product.image || 'default-image-url.jpg'}
            alt={product.name || 'Product'}
          />
        </div>
      </div>
      <div className="prodectDisplay-right">
        <h1>{product.name || 'Unknown Product'}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(55)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="old-price">${product.old_price || '0.00'} </div>
          <div className="new-price">${product.new_price || '0.00'}</div>
        </div>

        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="productDisplay-right-category">
          <span>Category: <span>Women, T-shirt, Crop Top</span></span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
