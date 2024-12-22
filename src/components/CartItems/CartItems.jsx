import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import axios from 'axios';
const CartItems = () => {
    const { getTotalAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);
    const handlePayment = async () => {
        const paymentData = {
          amount: getTotalAmount()*100, // Amount in paisa (1000 = Rs. 10)
          purchase_order_id: 'Order12345',
          purchase_order_name: 'Test Order',
          customer_info: {
            name: 'Ram Bahadur',
            email: 'ram@example.com',
            phone: '9800000001',
          },
        };
      
        try {
          const response = await axios.post('http://localhost:4000/payment', paymentData);
          console.log('Payment initiation successful:', response.data);
          // Redirect to the Khalti payment page
          window.location.href = response.data.data.payment_url; // Assuming Khalti returns a URL to redirect to
        } catch (error) {
          console.error('Error initiating payment:', error);
          alert('Payment initiation failed!');
        }
      };
      

    return (
        <div className="cart-items">
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                // Check if the item exists in the cart and quantity is greater than 0
                if ((cartItem?.[e.id] || 0) > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartItems-format cart-items-format-main">
                                <img className="cartIconProduct-icon" src={e.image} alt={e.name} />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartItems-quantity">{cartItem[e.id]}</button>
                                <p>${(e.new_price * cartItem[e.id]).toFixed(2)}</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt="Remove"
                                    className="remove-icon"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                // Return null if condition is not met
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartTotal">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItes-totalItem">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p> {/* Fix: Call the function */}
                        </div>
                        <hr />
                        <div className="cartItes-totalItem">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItes-totalItem">
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3> {/* Fix: Call the function */}
                        </div>
                    </div>
                    <button onClick={handlePayment}>Proceed to checkout</button>
                </div>
                <div className="promoode">
                    <p>If you have a promocode, enter it here:</p>
                    <div className="ca">
                        <input type="text" placeholder="Promocode" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
