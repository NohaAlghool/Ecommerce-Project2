import React from 'react'
 
import img1 from './images/6.jpg'
import img2 from './images/7.jpg'
import img3 from './images/8.jpg'
import img4 from './images/9.jpg'
import img5 from './images/10.jpg'
import img6 from './images/11.jpg'







const Follow = () => {
    return (
        <div className="follow">
             <div class="seprator">
                    <div class="line line-left"></div>
                        <h1 className="collection-title" >@ FOLLOW US ON INSTAGRAM</h1>
                    <div class="line line-right"></div>
                </div>

                <div className="row">
                    <div className="f1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="f2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="f3">
                        <img src={img3} alt="" />  
                    </div>
                    <div className="f4">
                        <img src={img4} alt="" />
                    </div>
                    <div className="f5">
                        <img src={img5} alt="" />
                    </div>
                    <div className="f6">
                        <img src={img6} alt="" />
                    </div>
                </div>



                <div className="row2">
                    <div className="fp">
                        <div className="icon"><i class="fas fa-car"></i></div>
                        <div className="about">
                            <h6>FREE SHIPPING</h6>
                            <span>Free shipping on all US order or <br /> order above $100</span>
                        </div>
                    </div>

                    <div className="fp">
                        <div className="icon"><i class="far fa-life-ring"></i></div>
                        <div className="about">
                            <h6>SUPPORT 24/7</h6>
                            <span>Contact us 24 hours a day, 7 <br /> days a week</span>
                        </div>
                    </div>


                    <div className="fp">
                        <div className="icon"><i class="fas fa-undo-alt"></i></div>
                        <div className="about">
                            <h6>30 DAYS RETURN</h6>
                            <span>Simply return it within 30 days <br /> for an exchange.</span>
                        </div>
                    </div>


                    <div className="fp">
                        <div className="icon"><i class="fas fa-key"></i></div>
                        <div className="about">
                            <h6>100% PAYMENT SECURE</h6>
                            <span>We ensure secure payment <br /> with PEV</span>
                        </div>
                    </div>
                </div>




        </div>
    )
}

export default Follow
