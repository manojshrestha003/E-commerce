import React, {useState, useEffect } from 'react'
import './NewCollection.css'

import Items from '../Items/Items'

const NewCollection = () => {
  const [new_collection, setNewCollection]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNewCollection(data));

  },[])
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i)=>{
               return  <Items key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}

        </div>
      
    </div>
  )
}

export default NewCollection
