import React from 'react';
import './intro.css';
import IntroCarousel from '../carousel/Carousel';

const Introduction = () => {
  return (
    <div className='intro--container' id='intro'>
      <div className='intro--image'>
      </div>
      <div className='intro--details'>
        <IntroCarousel />
      </div>
    </div>
  )
}

export default Introduction