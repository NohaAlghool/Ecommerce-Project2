import React from 'react'
import img1 from './images/logo1.png'
const Footer = () => {
    return (
        <div className="footer"> 
            <div className="footer-main">


                <div className="footer-col footer1">
                    <h1>Iwear</h1>
                    <p className="footer-location">
                        <div className="icon"><box-icon name='location-plus' flip='horizontal' color='#b1adad' ></box-icon></div>
                        <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
                    </p>
                    <p> <div className="icon"><box-icon name='envelope' color='#b1adad'></box-icon></div>
                        <span>contact@company.com</span>
                    </p>
                    <p> <div className="icon"><box-icon name='phone-call'  color='#b1adad'></box-icon></div>
                        <span>+001 2233 456</span>
                    </p>
                    <p>
                        <div className="social"><box-icon type='logo'      name='facebook' color='#b1adad'></box-icon></div>
                        <div className="social"><box-icon name='twitter'   type='logo'     color='#b1adad' ></box-icon></div>
                        <div className="social"><box-icon name='instagram' type='logo'     color='#b1adad' ></box-icon></div>
                        <div className="social"><box-icon type='logo'      name='linkedin' color='#b1adad' ></box-icon></div>
                        <div className="social"><box-icon type='logo'      name='pinterest-alt' color='#b1adad'></box-icon></div>
                    </p>
                </div>




                <div className="footer-col">
                    <h6>Categories</h6>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Accessories</p>
                    <p>Shoes</p>
                    <p>Denim</p>
                    <p>Dress</p>
                </div>




                <div className="footer-col">
                    <h6>Infomation</h6>
                    <p>About US</p>
                    <p>Contact Us</p>
                    <p>Terms & Conditions</p>
                    <p>Returns & Exchanges</p>
                    <p>Shipping & Delivery</p>
                    <p>Privacy Policy</p>
                </div>



                
                <div className="footer-col">
                    <h6>Useful links</h6>
                    <p>Store Location</p>
                    <p>Latest News</p>
                    <p>My Account</p>
                    <p>size Guide</p>
                    <p>FAQs 2</p>
                    <p>FAQs</p>
                </div>




                <div className="footer-col">
                    <h6>Newsletter Signup</h6>
                    <p className="subscrib">Subscribe to our newsletter and get <br /> 10% off your first purchase</p>
                  <div className="search">
                      <input type="text" placeholder="your email address"/>
                      <button>Subscribe</button>
                  </div>

                  <div className="paying">
                      <div className="pay"><box-icon className="pay-icon" name='paypal' type='logo' color='#7e7b7b' ></box-icon></div>
                      <div className="pay"><box-icon className="pay-icon" type='logo' name='visa' color='#7a7878' ></box-icon></div>
                      <div className="pay"></div>
                      <div className="pay"></div>
                      <div className="pay"></div>
                  </div>
             
                </div>



                
          

            </div>


            <div className="fooetr-copy">
            Copyright © 2022 <span>Iwear</span> all rights reserved. Powered by The4
            </div>




            
        </div>
    )
}

export default Footer
