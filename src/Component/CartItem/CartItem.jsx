import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove.png';

const CartItem = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);
    const [cartItemsLocalStorage, setCartItemsLocalStorage] = useState([]);

    useEffect(() => {
        // Get cart items from localStorage on component mount
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItemsLocalStorage(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        // Update localStorage when cartItem changes
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
        // Update cartItemsLocalStorage to match cartItem
        setCartItemsLocalStorage(cartItem);
    }, [cartItem]);

    const handleRemoveFromCart = (productId) => {
        // Remove item from cartItem state
        removeFromCart(productId);
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItemsLocalStorage[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <Link to={`/product/${e.id}`}>
                                    <img src={e.image} alt="" className='carticon-product-icon' />
                                </Link>
                                <p>{e.name}</p>
                                <p>Rs.{e.new_price}</p>
                                <button className="cartitems-quantity">{cartItemsLocalStorage[e.id]}</button>
                                <p>{e.new_price * cartItemsLocalStorage[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => handleRemoveFromCart(e.id)} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Delivery Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs.{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <Link to="/checkout">
                        <button>PROCEED TO CHECKOUT</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
