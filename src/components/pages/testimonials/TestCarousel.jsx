import React from 'react';
import Slider from 'react-slick';

const TestCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <div  className='slider'>
      <Slider {...settings} className='slider--container'>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial1.jpeg" alt="" />
          </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial2.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial3.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial4.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial5.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial6.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial7.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial8.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial9.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial10.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial11.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial12.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial13.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial14.jpeg" alt="" />
        </div>
        <div className="testimonials--img">
          <img src="http://acepropfirmtraders.com/img/newtestimonial15.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default TestCarousel