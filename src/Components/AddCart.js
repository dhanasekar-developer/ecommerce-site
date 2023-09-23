import React, { useReducer, useState } from "react";
import './AddCart.css'
import { ProductsData } from "./ProductsData";
import { IoIosClose } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiPlus, FiMinus } from 'react-icons/fi';

function AddCart() {
    let navigate = useNavigate();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    var basket = JSON.parse(localStorage.getItem('data')) || [];
    if (basket.length === 0) {
        return <div>
            <h3 className="empty">Your cart is empty</h3>
            <button className="productsPage" onClick={() => navigate('/products')}><AiOutlineArrowLeft className="arrow" />  Go to Products Page</button>
        </div>
    }

    let removeCart = (id) => {
        let selectedItem = id;
        basket = basket.filter((e) => e.id !== selectedItem.id);
        localStorage.setItem('data', JSON.stringify(basket))
        forceUpdate();
    }
    let clearCart = () => {
        basket = [];
        localStorage.setItem('data', JSON.stringify(basket))
        forceUpdate();
    }
    let checkout = () => {
        alert('Your products has been ordered')
    }
    let increase = (id) => {
        let selectedItem = id;
        let search = basket.find((x) => x.id === selectedItem.id);

        if (search === undefined) {
            basket.push({
                id: selectedItem.id,
                qtn: 1,
            });
        } else {
            search.qtn += 1;
        }
        localStorage.setItem("data", JSON.stringify(basket));
        forceUpdate();
    }
    let decrease = (id) => {
        let selectedItem = id;
        let search = basket.find((x) => x.id === selectedItem.id);

        if (search === undefined) return;
        else if (search.qtn === 1) return;
        else {
            search.qtn -= 1;
        }
        localStorage.setItem("data", JSON.stringify(basket));
        forceUpdate();

    }

    let amount = basket.map((e) => {
        let { id, qtn } = e;
        let search = ProductsData.find((f) => f.id === id) || [];
        return qtn * search.price;
    }).reduce((x, y) => x + y, 0);

    return (
        <div className="addToCartPage">
            <h3 className="heading">Total Amount : ₹{amount}</h3>
            <button className="clearCart_btn" onClick={() => clearCart()}>Clear Cart</button>
            <button className="checkout_btn" onClick={() => checkout()}>Checkout items</button>

            <div id='shopingCart' >
                {basket.map((e) => {
                    let { id, qtn } = e;
                    let search = ProductsData.find((f) => f.id === id) || [];
                    let { desc, price, image } = search;
                    let keyid = { id } + Math.random();

                    return <div className="addCartItems" key={keyid}>
                        <img src={image} alt={desc} />
                        <div className="cancel_btn">
                            <IoIosClose onClick={() => removeCart({ id })} />
                        </div>
                        <div className="cart_details">
                            <div className="cart_desc">
                                <div>
                                    <p>{desc}</p>
                                    <p>|</p>
                                    <p>₹{price}</p>
                                </div>
                            </div>
                            <div className="cart_desc">
                                <div className="quantity">
                                    <p>Qtn : </p>
                                    <p><FiMinus onClick={() => { decrease({ id }) }} /></p>
                                    <p>{qtn}</p>
                                    <p><FiPlus onClick={() => { increase({ id }) }} /></p>
                                </div>
                                <div>
                                    <p className="total">Total : {qtn * price}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                })}</div >
        </div >
    )
}

export default AddCart;