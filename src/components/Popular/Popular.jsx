import React, { useEffect, useState } from 'react'
import './Popular.css'

import Items from '../Items/Items'

const Popular = () => {
   const [popularProducts, setPopularProducts] = useState([]);
   
   useEffect(() => {
    fetch('http://localhost:4000/popular') // Corrected URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPopularProducts(data)) // Assuming setPopularProducts is defined
      .catch((error) => console.error('Error fetching data:', error)); // Added error handling
  }, []);
  
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Items key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default Popular
