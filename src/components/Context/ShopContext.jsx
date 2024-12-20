import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

// Initialize cart with only available product IDs
const getDefaultCart = (products) => {
  const cart = {};
  products.forEach((product) => {
    cart[product.id] = 0; // Initialize cart items with 0 for each product
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItem, setCartItems] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => {
        setAllProduct(data);
        setCartItems(getDefaultCart(data)); // Initialize cart with actual products
      });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Item added to cart on server:', data);
        })
        .catch((error) => {
          console.error('Error adding item to cart:', error);
          // Optionally rollback cart state here if needed
        });
    }
  };

  const removeFromCart = (itemId) => {
    // Update the cart state by decrementing the item count (if greater than 0)
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Prevent negative cart count
    }));
  
    // Check if the user is authenticated before making the API call
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }), // Send the itemId in the request body
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Parse the JSON response
        })
        .then((data) => {
          console.log('Item removed from cart on server:', data);
        })
        .catch((error) => {
          console.error('Error removing item from cart:', error);
          // Optionally, handle any rollback or error handling here
        });
    }
  };
  

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const ItemInfo = all_product.find((product) => product.id === Number(item));
        if (ItemInfo) {
          totalAmount += ItemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
