import React from 'react';
import './intro.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import UncontrolledExample from '../carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Introduction = () => {
  return (
    <div className='intro--container'>
      <div className='intro--image'>
      </div>
      <div className='intro--details'>
        <UncontrolledExample/>
      </div>
    </div>
  )
}

export default Introduction