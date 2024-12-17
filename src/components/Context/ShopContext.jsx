import React, { createContext, useState,useEffect } from 'react'



export const ShopContext =  createContext(null)
const getDefaultcart = () =>{
    let cart  = {};
    for(let index = 0; index<300+1; index++){
        cart[index] = 0;
    }
    return cart ;
   }

const ShopContextProvider = (props) =>{
    const [all_product, setAllProduct]= useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAllProduct(data))

    }, [])

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
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem+= cartItem[item]
            }
        }
        return totalItem;

    }
    
    const contextValue = {all_product, cartItem, addToCart, removeFromCart, getTotalAmount, getTotalCartItems};
   
   
    

    return  <ShopContext.Provider value = {contextValue}>
        {props.children}
    </ShopContext.Provider>

}
export default ShopContextProvider;