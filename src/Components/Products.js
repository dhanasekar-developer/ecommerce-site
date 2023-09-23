import React from "react";
import { ProductsData } from "./ProductsData.js";
import { useState } from "react";
import "./Products.css";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Footer from "./Footer";
import Alert from 'react-bootstrap/Alert';

function Products() {

    const [productsData, setProductsData] = useState(ProductsData);
    const FilterMenu = (result) => {
        const filterItem = ProductsData.filter((e) => {
            return e.item === result
        })
        setProductsData(filterItem)
    }

    let basket = JSON.parse(localStorage.getItem('data')) || [];

    let addToCart = (id) => {
        let selectedItem = id;
        // console.log(selectedItem.id);
        let search = basket.find((e) => e.id === selectedItem.id);
        if (search === undefined) {
            basket.push({
                id: selectedItem.id,
                count: 1,
                qtn: 1,
            })
            alert("This product added to cart")
            // return (
            //     <Alert key='success' variant='success'>
            //         This is a success alert—check it out!
            //     </Alert>)
        }
        else {
            alert('This product already exist in your cart');
        }
        localStorage.setItem('data', JSON.stringify(basket))

    }

    return (
        <div>
            <div className="buttons">
                <div className="fillterbtn">
                    <button onClick={() => FilterMenu("mobiles")}>Mobiles</button>
                    <button onClick={() => FilterMenu("laptops")}>Laptops</button>
                    <button onClick={() => FilterMenu("cameras")}>Camera</button>
                    <button onClick={() => FilterMenu("tablets")}>Tablets</button>
                    <button onClick={() => FilterMenu("headphones")}>Headphone</button>
                    <button onClick={() => setProductsData(ProductsData)}>All</button>

                </div>
            </div>
            <div className="products_cart">
                {productsData.map((e) => {
                    const { id, item, desc, image, price } = e;
                    return (<div className="products_cart_item" key={e.id}>
                        <div className="products_cart_img">
                            <img src={image} alt={item}></img>
                        </div>
                        <h5 className="products_product_desc">{desc}</h5>
                        <h3 className="products_product_price"><button>Rs.{price}</button></h3>
                        <div className="products_btn"><button onClick={() => addToCart({ id })} className="products_cardbtn">
                            Add To Card<>   </><RiShoppingCart2Fill color="#00d5ff" size={25} /></button></div>
                    </div>)
                })}
            </div>

        </div>
    )
}

export default Products;