import React from 'react';
import logo1 from './images/logo1.png'
import 'boxicons'
import './style.css'
import {
    Menu,
    MenuItem,
    MenuButton,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';



export default function Header() {
    
    return (
        <div className="header">  
            <div className="top-menu">
                    <div className="info">
                        <box-icon name='phone' color='#070707' ></box-icon>
                        <div className="num">+01 23456789 </div>
                    </div>
                    <div className="title">Summer sale discount off 50%! Shop Now</div>
                    <div className="language">
                            <div className="lang">
                                
                            </div>

                        {/* <box-icon name='chevron-down' color='#ffffff' ></box-icon> */}
                    </div>
            </div>

        
        
        
        
        
        
        
        
        </div>



    )
}
