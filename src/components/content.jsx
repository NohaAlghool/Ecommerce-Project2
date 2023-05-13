import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function content() {
    
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
        <div className="content-carousel" >
            <Carousel responsive={responsive}>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHlfRswMvbWzGVFcAIxcwCsis954wZRgupA&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB916Zseqywk4Uj-45Jbs8nSE0bbogYcB4aQ&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lF4Z8BSQfKXFfIbBYfDTAJ4aQ4XfFBOYOQ&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DHGrVH8_VT54ytW4V6-Odo1epgnLTf9p3A&usqp=CAUU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHlfRswMvbWzGVFcAIxcwCsis954wZRgupA&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB916Zseqywk4Uj-45Jbs8nSE0bbogYcB4aQ&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lF4Z8BSQfKXFfIbBYfDTAJ4aQ4XfFBOYOQ&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdZGZ2iIJrUBGhTCX8mrXovOqprZCAos-KA&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiTuPyUlaoX91GDOP_agmxDqcImDDeS_Mog&usqp=CAU" alt="" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEU29rloEjTv_7Jap7F3BMDgP4MuelL9-qw&usqp=CAU" alt="" /></div>
            </Carousel>
        </div>
    )
}
