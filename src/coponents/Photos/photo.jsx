import React from "react";
import Slider from "react-slick";
import anntara from '../../assets/anntara.jpg'
import domhill from '../../assets/domhill.jpg'
import majesticaljasmin from '../../assets/majesticaljasmin.jpg'
import stackback2 from '../../assets/stackback2.jpg'
import stockduo2 from '../../assets/stockduo2.jpg'
import redgown2 from '../../assets/redgown2.jpg'

function SimpleSlider(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings}>
      <div>
      <img className="img-fluid" src={anntara} alt=""/>
      </div>
      <div>
      <img className="img-fluid" src={domhill} alt=""/>
      </div>
      <div>
      <img className="img-fluid" src={majesticaljasmin} alt=""/>
      </div>
      <div>
      <img className="img-fluid" src={stackback2} alt=""/>
      </div>
      <div>
      <img className="img-fluid" src={stockduo2} alt=""/>
      </div>
      <div>
      <img className="img-fluid" src={redgown2} alt=""/>
      </div>
     
     
    </Slider>
  );
}

export default SimpleSlider;