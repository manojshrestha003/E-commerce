import React from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='product-display'>
        <div className="productDisplay-left">
            <div className="productDisplayImage-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                
            </div>
            <div className="productDisplay-image">
                <img className='productDisplay-main-img' src={product.image} alt="" />
            </div>

        </div>
        <div className="prodectDisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(55)</p>
            </div>
            <div className="product-display-right-prices">
                <div className="old-price">${product.old_price} </div>
                <div className="new-price">${product.new_price}</div>
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
            <button>Att to catt </button>
            <p className='productDisplay-right-category'> <span>category: <span>Womwn , T-sirt , crop TOp</span></span></p>
            <p className='productDisplay-right-category'> <span>category: <span>Womwn , T-sirt , crop TOp</span></span></p>
  
        </div>
      
    </div>
  )
}

export default ProductDisplay
