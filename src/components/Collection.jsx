import React from 'react';
import { HAKI_LOGO} from '../file'
import { HAKI_LOGO2} from '../file'

import './style.css'

import img from './images/007.png';
import img00 from './images/007copy.png';

import img2 from './images/008.png';
import img3 from './images/008copy.png';

import img4 from './images/004.png';
import img004 from './images/004copy.png';

import img5 from './images/005.png';
import img005 from './images/005copy.png';


import img6 from './images/002copy.png';
import img006 from './images/003.png';


import img7 from './images/006.png';
import img007 from './images/006copy.png';

import img8 from './images/009.png';
import img008 from './images/009copy.png';

import img9 from './images/01.png';
import img009 from './images/01copy.png';

import collectionData from './collectionData'


export default function Collection() {
    // Scroll reveal

 

    return (

        <div className="collection ">
                 
                 <div class="seprator">
                    <div class="line line-left"></div>
                        <h1 className="collection-title" > New collection</h1>
                    <div class="line line-right"></div>
                 </div>
                
                <p className="collection-p">Top view in this week</p>
               
               
               
                <div className="collection-gallery">
                       {
                            collectionData.map((item)=>
                                <div className="collection-card">
                                     <img src={item.img} alt="img" className="collection-img"  />
                                     <img src={item.img2} alt="img" className="collection-img2" />
                                    { console.log(item)}
                                    <div class="collection-overlay">
                                                        <div className="new-like"><box-icon name='heart' color='#ffffff' ></box-icon></div>
                                                        <div className="new-bookmark"><box-icon name='bookmark' color='#ffffff' ></box-icon></div>
                                                        <div className="new-cart"> <box-icon name='cart' color='#ffffff'></box-icon></div>
                                                        <a href="#" class="button1">Shopping</a>
                                                        <a href="#" class="button2">view</a>
                                                    </div>
                                </div>
                            )
                        }
                </div>     

                <div className="load">
                        <button className="collection-but">Load more</button>
                </div>
        </div>
    )
}

