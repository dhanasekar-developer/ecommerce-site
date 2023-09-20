import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
import MobileCart from './MobileCart';
import LaptopCart from './LaptopCart';
import TabletCart from './TabletCart';
import CameraCart from './CameraCart';
import HeadphoneCart from './HeadphoneCart';
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    infinite: true,
    dots: false,
   
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
          breakpoint: 1500,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 1,

          }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
    ]
  };


  return (
    <div>

      <div className='home_background'>
        <img src={require('../Images/back23.jpg')} alt="Welcome TO Our Website"/>
      </div>
      <div className="avail_list">

        <Slider {...settings} className="full_slider">
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/mobiles.jpg')} alt="product"></img>
            </div>
            <h5 className="avail_product_name">Mobiles</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/cameras.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Cameras</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/headphones.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Headphones</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/tabs.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Tabs</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/laptops.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Laptops</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/grocerys.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Grocerys</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/furnitures.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Furnitures</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/electronics.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Electronics</h5>
          </div>
          <div className='awail_list_product'>
            <div className='awail_list_img'>
              <img src={require('../Images/dresses.jpg')} alt="products"></img>
            </div>
            <h5 className="avail_product_name">Dress</h5>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <Carousel>
          <Carousel.Item id='carousel'>
            <img src={require('../Images/offer10.jpg')} alt="carousel_image"></img>
          </Carousel.Item>
          <Carousel.Item id='carousel'>
            <img src={require('../Images/offer5.jpg')} alt="carousel_image"></img>
          </Carousel.Item>
          <Carousel.Item id='carousel'>
            <img src={require('../Images/offer18.jpg')} alt="carousel_image"></img>
          </Carousel.Item>
          <Carousel.Item id='carousel'>
            <img src={require('../Images/offer12.jpg')} alt="carousel_image"></img>
          </Carousel.Item>
        </Carousel>
      </div>

      <MobileCart></MobileCart>
      <LaptopCart></LaptopCart>
      <TabletCart></TabletCart>
      <CameraCart></CameraCart>
      <HeadphoneCart></HeadphoneCart>
      <Footer></Footer>
    </div>
  )
}

export default Home;