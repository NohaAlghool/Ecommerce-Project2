import React from 'react'
import 'boxicons'

import img1 from './images/woman.jpg'
import img2 from './images/man.jpg'
import img3 from './images/sale1.jpg'
import img4 from './images/sale2.jpg'
import img5 from './images/sale3.jpg'
import img6 from './images/9.jpg'

const Header2 = () => {
    return (
       <div>
           <nav>
               <div className="wrapper">
                   <div className="logo">Iwear</div>
                   <input type="radio" name="slide" id="menu-btn" />
                   <input type="radio" name="slide" id="cancel-btn" />


                   <ul className="nav-links">

                       <label For="cancel-btn" className="btn cancel-btn"><i className="fas fa-times"></i></label>

                       <li><a href="#" class="desktop-item">Demo</a>
                        <input type="checkbox"  id="showMega3" />
                        <label for="showMega3" class="mobile-item">Demo</label>
                        <div class="mega-box">
                            <div class="content">

                               <div class="row">
                                   <header>HOMEPAGES</header>
                                   <ul class="mega-links">
                                        <li><a href="#">Home Default</a></li>
                                        <li><div className="circle"><a href="#">Home Classic</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><a href="#">Home Video Banner</a></li>
                                        <li><a href="#">Home categories links</a></li>
                                        <li><a href="#">Home Static Image</a></li>
                                        <li><a href="#">Home Metro</a></li>
                                        <li><a href="#">Home Lookbook</a></li>
                                        <li><a href="#">Home Parallax</a></li>
                                        <li><a href="#">Home Instagram Shop</a></li>
                                        <li><div className="circle"><a href="#">Home Flower</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                        <li><div className="circle"><a href="#">Home Furniture</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><div className="circle"><a href="#">Home Furniture2</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                        <li><a href="#">Home New Furniture</a></li>
                                        <li><div className="circle"><a href="#">Home Bag</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                        <li><a href="#">Home Langeries</a></li>
                                        <li><a href="#">Home Glasses</a></li>
                                        <li><div className="circle"><a href="#">Home Shose</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><a href="#">Home Plant</a></li>
                                        <li><div className="circle"><a href="#">Home plant2</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><a href="#">Home Watches</a></li>
                                        <li><a href="#">Home Cosmetic</a></li>
                                        <li><a href="#">Home Medical</a></li>
                                        <li><div className="circle"><a href="#">Home Hiking</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                        <li><a href="#">Home Sport Accessories</a></li>
                                        <li><div className="circle"><a href="#">Home Bakery</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                        <li><div className="circle"><a href="#">Home Hi-tech</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                      
                                   </ul>
                               </div>
                               <div class="row">
                                   <header>HOMEPAGES</header>
                                   <ul class="mega-links">
                                        <li><a href="#">Home Fashion 9</a></li>
                                        <li><a href="#">Home Fashion 10</a></li>
                                        <li><a href="#">Home Fashion 11</a></li>
                                        <li><a href="#">Home Fashion 12</a></li>
                                        <li><a href="#">Home Fashion Simple</a></li>
                                        <li><a href="#">Home Fashion Vertical</a></li>
                                        <li><a href="#">Home Fashion Trend</a></li>
                                        <li><a href="#">Home New Fashion</a></li>
                                        <li><div className="circle"><a href="#">Demo RTL</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><a href="#">Home Lookbook Collection</a></li>
                                        <li><div className="circle"><a href="#">Demo Decore</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><a href="#">Home Decore2</a></li>
                                        <li><a href="#">Home Electric</a></li>
                                        <li><a href="#">Home Electric Vertical</a></li>
                                        <li><a href="#">Home Digital</a></li>
                                        <li><div className="circle"><a href="#">One Product Store</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><a href="#">Home Kids & Accessories</a></li>
                                        <li><a href="#">Home Sport</a></li>
                                        <li><div className="circle"><a href="#">Home Bicycle</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                        <li><div className="circle"><a href="#">Home Jewelry</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                        <li><a href="#">Home Organic</a></li>
                                        <li><a href="#">Home Organic2</a></li>
                                        <li><a href="#">Home Handmade</a></li>
                                        <li><div className="circle"><a href="#">Home spa</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                        <li><a href="#">Home Yoga</a></li>
                                        <li><div className="circle"><a href="#">Homw Barber</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                     
                                   </ul>
                               </div>
                               <div class="row">
                                <header>HOMEPAGES</header>
                                <ul class="mega-links">
                                     <li><a href="#">Home Layout 1</a></li>
                                     <li><a href="#">Home Layout 2</a></li>
                                     <li><a href="#">Home Layout 3</a></li>
                                     <li><a href="#">Home Layout 4</a></li>
                                     <li><a href="#">Home Layout 5</a></li>
                                     <li><a href="#">Home Layout 6</a></li>
                                     <li><a href="#">Home Layout 7</a></li>
                                     <li><a href="#">Home Layout 8</a></li>
                                     <li><a href="#">Home Layout 9</a></li>
                                     <li><a href="#">Home Layout 10</a></li>
                                </ul>
                               </div>
                               <div class="row">
                                <header>HOMEPAGES</header>
                                <ul class="mega-links">
                                     <li><a href="#">Catalog mode</a></li>
                                     <li><a href="#">Cookies law info</a></li>
                                     <li><a href="#">Age verification</a></li>
                                     <li><a href="#">Mega menu</a></li>
                                     <li><a href="#">Sticky Footer</a></li>
                                     <li><a href="#">Hidden Search</a></li>
                                     <li><a href="#">Frequently Bought Together</a></li>
                                     <li><a href="#">Variant Images Grouped</a></li>
                                     <li><div className="circle"><a href="#">Search Filter</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                     <li><div className="circle"><a href="#">Section all pages</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                     <li><div className="circle"><a href="#">Compare</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                     <li><a href="#">Pickup Availabilty 8</a></li>
                                     <li><a href="#">Search Full</a></li>
                                     <li><div className="circle"><a href="#">Brands page</a><div className="circle-new2"><div className="circle-word2">New</div></div></div></li>
                                </ul>
                               </div>

                            </div>
                        </div>
                    
                    
                    
                    
                    
                    </li>




                    <li className="shop"><div className="circle"><a href="#" className="desktop-item">Shop</a><div className="circle-new"><div className="circle-word">New</div></div></div>
                        <input type="checkbox"  id="showMega2" />
                        <label for="showMega2" className="mobile-item">Shop</label>

                        <div className="mega-box">
                            <div className="shop-content">

                               <div className="shop-row">
                                   <header>SHOP PAGES</header>
                                   <ul className="shop-menu">
                                        <li><a href="#">Grid Layout</a></li>
                                        <li><a href="#">Packery Layout</a></li>
                                        <li><a href="#">Mansonry Layout</a></li>
                                        <li><a href="#">Full Width Layout</a></li>
                                        <li><a href="#">1600px Layout</a></li>
                                        <li><a href="#">left Sidebar?</a></li>
                                        <li><a href="#">Right Sidebar?</a></li>
                                        <li><a href="#">Hidden Sidebar?</a></li>
                                   </ul>
                               </div>
                               <div className="shop-row" >
                                   <header>FEATURES</header>
                                   <ul className=" shop-menu">
                                    <li><a href="#">Filter options</a></li>
                                    <li><a href="#">Filters sidebar?</a></li>
                                    <li><a href="#">Filters area</a></li>
                                    <li><a href="#">Load More</a></li>
                                    <li><a href="#">Infinit Scrolling</a></li>
                                    <li><a href="#">Collections list</a></li>
                                    <li><a href="#">Sub Collection</a></li>
                                    <li><a href="#">List switcher</a></li>
                                   </ul>
                               </div>
                               

                               <div className="shop-row shop-img">
                                   <img src={img1} alt="" />
                               </div>
                               <div className="shop-row shop-img">
                                   <img src={img2} alt="" />
                               </div>








                            </div>
                        </div>
                    
                    </li>







                    <li><a href="#" className="desktop-item">Product</a>
                        <input type="checkbox"  id="showMega4" />
                        <label for="showMega4" className="mobile-item">Product</label>
                        <div className="mega-box">
                            <div className="content">

                               <div className="row">
                                   <header>PRODUCT LAYOUT</header>
                                   <ul className="mega-links product-menu">
                                        <li><a href="#">Product Detail Layout 1</a></li>
                                        <li><a href="#">Product Detail Layout 2</a></li>
                                        <li><a href="#">Product Detail Layout 3</a></li>
                                        <li><a href="#">Product Detail Layout 4</a></li>
                                        <li><a href="#">Product Bottom Thumbnails</a></li>
                                        <li><a href="#">Product Right Thumbnails</a></li>
                                        <li><a href="#">Product without Thumbnails</a></li>
                                        <li><a href="#">Product Right Sidebar</a></li>
                                        <li><a href="#">Product Left Sidebar</a></li>
                                        <li><a href="#">Product Tab accordions</a></li>
                                        <li><a href="#">ATC Button Full width</a></li>
                                        <li><a href="#">Product Full Width Layout</a></li>
                                        <li><div className="circle"><a href="#">Advanced Product Type</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                   </ul>
                               </div>
                               <div className="row">
                                   <header>PRODUCT DETAIL</header>
                                   <ul className="mega-links product-menu">
                                    <li><a href="#">External/Affiliate Product</a></li>
                                    <li><a href="#">Simple Product</a></li>
                                    <li><a href="#">Variable Product</a></li>
                                    <li><div className="circle"><a href="#">Grouped Product</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                    <li><a href="#">Inner Zoom#1</a></li>
                                    <li><a href="#">External Zoom</a></li>
                                    <li><a href="#">Inner Zoom#2?</a></li>
                                    <li><a href="#">PhotoSwip Popup</a></li>
                                    <li><div className="circle"><a href="#">Product Video</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                    <li><div className="circle"><a href="#">Product 3D,Ar modles</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                    <li><a href="#">Vendor Image</a></li>
                                    <li><a href="#">Tap Acceordions 2</a></li>               
                                   </ul>
                               </div>
                               <div className="row">
                                <header>PRODUCT SWATCH</header>
                                <ul className="mega-links product-menu">
                                    <li><a href="#">Product color swatch</a></li>
                                    <li><a href="#">Product Gallery swatch</a></li>
                                    <li><a href="#">Product Images swatch</a></li>
                                    <li><a href="#">Swatch color</a></li>
                                    <li><a href="#">Swatch color circle</a></li>
                                    <li><a href="#">Swatch Radio</a></li>
                                    <li><a href="#">Swatch Radio Color</a></li>
                                    <li><a href="#">Swatch Radio Type 2</a></li>
                                    <li><a href="#">Swatch Radio color Type 2</a></li>
                                    <li><a href="#">Swatch Rectangle</a></li>
                                    <li><a href="#">Swatch Rectangle color</a></li>
                                    <li><a href="#">Swatch simple</a></li>      
                                    <li><a href="#">Swatch simple color</a></li>        
                                </ul>
                               </div>
                               <div className="row">
                                <header>PRODUCT FEATURES</header>
                                <ul className="mega-links product-menu">
                                     <li><div className="circle"><a href="#">Frquently Bought Together</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                     <li><a href="#">Product pre Orders</a></li>
                                    <li><div className="circle"><a href="#">Product upsell Feature</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                    <li><a href="#">Description with  Lookbook</a></li>
                                    <li><div className="circle"><a href="#">Back in stock notifiction</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                     <li><a href="#">variant Images Grouped</a></li>
                                     <li><a href="#">Size Guide HTML</a></li>
                                     <li><a href="#">Delivery & Return</a></li>
                                     <li><a href="#">Ask a Question</a></li>
                                     <li><a href="#">product sticky</a></li>
                                     <li><a href="#">360 product viewer</a></li>
                                     <li><div className="circle"><a href="#">Dynamic checkout button</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                                     <li><div className="circle"><a href="#">Sticky add to the cart</a><div className="circle-new2 circle-Hot"><div className=" circle-word2 Hot-word2">Hot</div></div></div></li>
                             
                                </ul>
                               </div>

                            </div>
                        </div>
                    
                    
                    </li>




                    <li className="sale red"><div className="circle"><a href="#" className="desktop-item"><div className="red">sale</div></a><div className="circle-new gold"><div className="circle-word">Sale</div></div></div>

                               <input type="checkbox"  id="showMega" />
                               <label for="showMega" className="mobile-item">sale</label>

                                <div className="mega-box">
                                   <div className=" sale-content">

                                       <div className="sale-row">
                                           <header>women</header>
                                           <ul className="sale-menu">
                                                <li><a href="#">accesories</a></li>
                                                <li><a href="#">dress</a></li>
                                                <li><a href="#">t-shirt</a></li>
                                                <li><a href="#">Hodi</a></li>
                                                <li><a href="#">accesories</a></li>
                                                <li><a href="#">dress</a></li>
                                                <li><a href="#">t-shirt</a></li>
                                                <li><a href="#">Hodi</a></li>
                                           </ul>
                                       </div>
                                       <div className="sale-img">
                                           <img src={img3} alt="" />
                                           <img src={img4} alt="" />
                                           <img src={img5} alt="" />
                                           <img src={img6} alt="" />

                                       </div>
     

                                   </div>
                                </div>
                               </li>










                       <li><a href="#" className="desktop-item">Portfolio</a>
                            <input type="checkbox"  id="showDrop" />
                            <label for="showDrop" className="mobile-item">Portfolio</label>
                       <ul className="drop-menu">
                           <div className="row">
                           <li><a href="">Portfolio 2 Columns</a></li>
                           <li><a href="">Portfolio 3 Columns</a></li>
                           <li><a href="">Portfolio 4 Columns</a></li>
                           <li><a href="">Single Portflio with shop</a></li>
                           <li><a href="">Single Portflio with Lookbook</a></li>
                           <li><a href="">Single Portflio with Instagram shop</a></li>
                           </div>
                       </ul>
                       </li>



                       <li><a href="#" className="desktop-item">Lookbook</a>
                            <input type="checkbox"  id="showDrop2" />
                            <label for="showDrop2" className="mobile-item">Lookbook</label>
                            <ul className="drop-menu lookbook-menu">
                                <div className="row">
                                     <li><a href="">Lookbook Slider</a></li>
                                     <li><a href="">Lookbook Section</a></li>
                                     <li><a href="">Lookbook instagram</a></li>
                                     <li><a href="">Lookbook in product</a></li>
                                     <li><a href="">Lookbook in blog post</a></li>
                                     <li><a href="">Lookbook in portfolio post</a></li>
                                     <li><a href="">Lookbook in page</a></li>
                       
                                </div>
                            </ul>
                       </li>


                       <li><a href="#">Blog</a>
                            <input type="checkbox"  id="showDrop3" />
                            <label for="showDrop3" className="mobile-item">Blog</label>
                            <ul className="drop-menu Blog-menu">
                                <div className="row">
                                        <li><a href="">Grid Layout</a></li>
                                        <li><a href="">Masonry Layout</a></li>
                                        <li><a href="">Left Siderbar</a></li>
                                        <li><a href="">Right Siderbar</a></li>
                                        <li><a href="">Single Post with Product Listing</a></li>
                                        <li><a href="">Single Post with Instagram Shop</a></li>
                                        <li><a href="">Single Post with Categories</a></li>
                                        <li><a href="">Single Post with lookbook</a></li>
                                </div>
                            </ul>
                       </li>
                   </ul>














               
                <ul className="social">
                    <li className="icon"><box-icon name='user'></box-icon></li>
                    <li className="icon"><box-icon name='search' ></box-icon></li>
                    <li className="icon heart"><box-icon name='heart' ></box-icon><div className="social-heart"><div className="number">0</div></div></li>
                    <li className="icon"><box-icon name='cart'></box-icon><div className="social-heart cart-number"><div className="number cart-number">0</div></div></li>
                </ul>
                <label For="menu-btn" className=" btn menu-btn"><i className="fas fa-bars"></i></label>
               </div>
           </nav>
       </div>
    )
}

export default Header2
