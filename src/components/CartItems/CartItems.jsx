import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalAmount, all_product, cartItem, removeFromCart} = useContext(ShopContext)
    
    return (
        <div className='cart-items'>
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
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}> {/* Added key to prevent React warnings */}
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
                    )
                }
                // Return null if condition is not met
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartTotal">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartItes-totalItem">
                            <p>Subtotal</p>
                            <p>${getTotalAmount}</p>
                        </div>
                        <hr />
                        <div className="cartItes-totalItem">
                            <p>Shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="cartItes-totalItem">
                            <h3>Total</h3>
                            <h3>${getTotalAmount}</h3>
                        </div>
                       
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="promoode">
                    <p>If you have a promocode enter here </p>
                    <div className="ca">
                        <input type="text" placeholder='promocode' />
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
