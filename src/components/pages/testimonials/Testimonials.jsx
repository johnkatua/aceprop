import React from 'react';
import './testimonials.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestCarousel from './TestCarousel';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Testimonials = () => {
  return (
    <div className='testimonials--container'>
      <div className='testimonials--header'>
        Testimonials
      </div>
      {/* <TestCarousel /> */}
    </div>
  )
}

export default Testimonials