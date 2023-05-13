import React from 'react'
import collectionData from './collectionData'






const Collection2 = () => {
    return (
        <div className="collection">
                <div class="seprator">
                    <div class="line line-left"></div>
                        <h1 className="collection-title" > BEST SELLER</h1>
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

export default Collection2
