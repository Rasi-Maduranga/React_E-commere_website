import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNum: "",
        expire: "",
        ccv: ""
    });

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Get cart items from localStorage
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const checkout = async () => {
        console.log("Checkout Function Executed", formData);
        try {
            const response = await fetch('http://localhost:4000/checkout', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, cartItems }),
            });
            const responseData = await response.json();
            console.log("Checkout Response:", responseData); // Log the response data
            
            if (responseData.success) {
                console.log("Checkout successful!"); // Log success message
                localStorage.removeItem('cartItems');
                window.location.replace("/");
            } else {
                console.log("Checkout failed. Errors:", responseData.errors); // Log errors
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Checkout error:", error); // Log any fetch errors
            alert("An error occurred during checkout. Please try again later.");
        }
    };

    return (
        <div className="wrapper">
            <div className="container">
                <form onSubmit={(e) => { e.preventDefault(); checkout(); }}>
                    <h1>
                        <i className="fas fa-shipping-fast"></i>
                        Shipping Details
                    </h1>
                    <div className="name">
                        <div>
                            <label htmlFor="f-name">Name</label>
                            <input name='name' value={formData.name} onChange={changeHandler} type="text" />
                        </div>
                    </div>
                    <div className="street">
                        <label htmlFor="name">Street</label>
                        <input name='address' value={formData.address} onChange={changeHandler} type="text" />
                    </div>
                    <div className="address-info">
                        <div>
                            <label htmlFor="city">City</label>
                            <input name='city' value={formData.city} onChange={changeHandler} type="text" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <input name='state' value={formData.state} onChange={changeHandler} type="text" />
                        </div>
                        <div>
                            <label htmlFor="zip">Zip</label>
                            <input name='zip' value={formData.zip} onChange={changeHandler} type="text" />
                        </div>
                    </div>
                    <h1>
                        <i className="far fa-credit-card"></i> Payment Information
                    </h1>
                    <div className="cc-num">
                        <label htmlFor="card-num">Credit Card No.</label>
                        <input name='cardNum' value={formData.cardNum} onChange={changeHandler} type="text" />
                    </div>
                    <div className="cc-info">
                        <div>
                            <label htmlFor="expire">Exp</label>
                            <input name='expire' value={formData.expire} onChange={changeHandler} type="text" />
                        </div>
                        <div>
                            <label htmlFor="ccv">CCV</label>
                            <input name='ccv' value={formData.ccv} onChange={changeHandler} type="text" />
                        </div>
                    </div>
                    <div className="btn">
                        <button type="submit">Purchase</button>
                        <Link style={{ textDecoration: 'none' }} to='/cart'><button type="button">Back to cart</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
