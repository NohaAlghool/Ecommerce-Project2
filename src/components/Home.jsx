import React from 'react'
import Header from './Header';
import Header2 from './Header2';
import Slider  from './Slider';
import Test2 from './Test2'
import Collection from './Collection';
import LookBook from './lookBook';
import Collection2 from './Collection2';
import Lates from './Lates';
import Follow from './Follow';
import Footer from './Footer'



import './style.css'

export default function Home() {


 


    return (
        <div className="home">
            <Header/>
            <Header2/>
            <Slider/>
            <Test2 />
            <Collection />
            <LookBook />
            <Collection2/>
            <Lates/>
            <Follow/>
            <Footer/>
        </div>
    )
}
