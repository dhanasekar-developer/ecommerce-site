import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductsData } from "./ProductsData";
import './MobileCart.css';
import { RiShoppingCart2Fill } from "react-icons/ri";

function CameraCart() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1524,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };
    const cameraProduct = ProductsData.filter(camera => camera.item === 'cameras');

    let basket = JSON.parse(localStorage.getItem('data')) || [];

    let addToCart = (id) => {
        let selectedItem = id;
        console.log(selectedItem.id);
        let search = basket.find((e) => e.id === selectedItem.id);
        if (search === undefined) {
            basket.push({
                id: selectedItem.id,
                count: 1,
                qtn: 1,
            })
            alert('This product added to your cart');
        }
        else {
            alert('This product already exist in your cart');
        }
        localStorage.setItem('data', JSON.stringify(basket))
    }

    return (
        <div className="cart">
            <h1 className="cart_head">Cameras</h1>
            <Slider {...settings} className="full_slider">

                {cameraProduct.map((e) => {
                    let { id, image, desc, price, item } = e;
                    return <div className="cart_item" key={id}>
                        <div className="cart_img">
                            <img src={image} alt={item} />
                        </div>
                        <h5 className="product_name">{desc}</h5>
                        <h3 className="product_price">Rs.{price}</h3>
                        <div className="btn"><button onClick={() => addToCart({ id })} className="cardbtn">Add To Card<></>
                            <RiShoppingCart2Fill color="#00d5ff" size={25} /></button></div>
                    </div>
                })}

            </Slider>
        </div>
    )
}

export default CameraCart;