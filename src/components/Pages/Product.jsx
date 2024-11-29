import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId}= useParams();
  const product = all_product.find((e)=>e.id === Number(productId)) 
  return (
    <div>
      <h1>Hello this is product page </h1>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
      
      
    </div>
  )
}

export default Product
