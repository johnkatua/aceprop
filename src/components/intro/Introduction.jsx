import React from 'react';
import './intro.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import IntroCarousel from '../carousel/Carousel';

const Introduction = () => {
  return (
    <div className='intro--container'>
      <div className='intro--image'>
      </div>
      <div className='intro--details'>
        <IntroCarousel />
      </div>
      {/* <div className='intro--details'>
        <IntroCarousel />
      </div> */}
    </div>
  )
}

export default Introduction