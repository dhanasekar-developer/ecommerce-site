import React from 'react';
import './Footer.css'
import { MdSend } from "react-icons/md";


function Footer() {
    return (
        <div className='holeFooter'>

            <div className='footer_top'>
                <div className='footer_top_left'>
                    <img src={require('../Images/logo.png')} height={90} alt="Shopy" />
                    <div className='footer_emailbar'>
                        <input type='email' name="location" placeholder='Enter email...'></input>
                        <button className="footer_sendbtn"><MdSend size={20} /></button>
                    </div>
                </div>
                <div className='get_mobile_app justify-content-end'>
                    <div>
                        <h4 className='mb-3'>Get Mobile Vertion</h4>
                        <img src={require('../Images/googlePlay.jpg')} height={40} className='me-3' alt="GooglePlay" />
                        <img src={require('../Images/appStore.jpg')} height={40} alt="AppStore" />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <ul>
                    <li className='Foot_title'>About</li>
                    <li>Cantact us</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Flipkart Stories</li>
                    <li>Press</li>
                    <li>Flipkart Wholesale</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    <li className='Foot_title'>Help</li>
                    <li>Payments</li>
                    <li>Shiping</li>
                    <li>Cancellation</li>
                    <li>FAQ</li>
                    <li>Report</li>
                </ul>
                <ul>
                    <li className='Foot_title'>Consumer Policy</li>
                    <li>Return Policy</li>
                    <li>Termsof Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>ERP Compliance</li>
                </ul>
                <ul>
                    <li className='Foot_title'>Social</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
                <ul className='myDetails'>
                    <li className='Foot_title'>Developed by</li>
                    <li>Dhanaseakr.s</li>
                    <li>dhanasekarsdeveloper@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;