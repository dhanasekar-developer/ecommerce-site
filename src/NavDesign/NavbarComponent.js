import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavbarComponent.css"
import React from 'react';
import { Nav, NavLink, Navbar } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Home from "../Components/Home";
import Products from '../Components/Products';
import Login from '../Components/Login';
import AddCart from "../Components/AddCart"
import Signin from '../Components/Signin';
import Read from "../Components/Read";
import { RiShoppingCart2Fill } from "react-icons/ri";

function NavbarComponent(size) {
    return (
        <div>
            <Router>
                <Navbar className='fullnav boder-2' expand="md">
                    <div className='res_nav justify-content-between'>
                        <div className="bars">
                            <div className='logo'>
                                <img src={require("../Images/logo2.png")} alt='Shopy'></img>
                            </div>

                            <div className='search_bar nav_input'>
                                <input type="text" name="product name" placeholder='Enter Product Name'></input>
                                <button variant="dark" className="searchbtn">
                                    <img src={require("../Images/search_icon.png")} alt="search"></img></button>
                            </div>
                        </div>
                    </div>

                    <NavbarToggle></NavbarToggle>
                    <NavbarCollapse className='justify-content-end me-3'>
                        <Nav>
                            <NavLink as={Link} to="/"><span className="navbar_links">Home</span></NavLink>
                            <NavLink as={Link} to="/products"><span className="navbar_links">Products</span></NavLink>
                            <NavLink as={Link} to="/login"><span className="navbar_links">Login</span></NavLink>
                            <NavLink as={Link} to="/addcart" ><span className="navbar_links_cart"><RiShoppingCart2Fill size={30} /></span>
                            </NavLink>
                        </Nav>
                    </NavbarCollapse>

                </Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/products" element={<Products></Products>}></Route>
                    <Route path="/addcart" element={<AddCart></AddCart>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/signin" element={<Signin></Signin>}></Route>
                    <Route path="/read" element={<Read></Read>}></Route>

                </Routes>

            </Router>


        </div>
    )
}

export default NavbarComponent;