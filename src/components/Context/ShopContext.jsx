import React, { createContext, useState } from 'react'
import all_product from '../assets/all_product'


export const ShopContext =  createContext(null)
const getDefaultcart = () =>{
    let cart  = {};
    for(let index = 0; index<all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart ;
   }

const ShopContextProvider = (props) =>{
    const [cartItem , setCartItems]= useState(getDefaultcart())
    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))

    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))

    }
    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let ItemInfo = all_product.find((product) => product.id === Number(item));
                if (ItemInfo) {
                    totalAmount += ItemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmount; 
    };
    
    const contextValue = {all_product, cartItem, addToCart, removeFromCart, getTotalAmount};
   
   
    

    return  <ShopContext.Provider value = {contextValue}>
        {props.children}
    </ShopContext.Provider>

}
export default ShopContextProvider;