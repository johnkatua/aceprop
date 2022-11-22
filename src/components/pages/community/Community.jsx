import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './community.css'

const Community = () => {
  return (
    <div className='community--container'>
      <div className='community--details'>
        <div className='community--details__header'>
          JOIN OUR TELEGRAM COMMUNITY <FaArrowDown size={25} color='blue'/>
        </div>
        <div className='community--details__para'>
          <p>
            We can help you get Funded and start earning substantial income on a Bi-weekly basis
          </p>
          {" "}
          <p>
            For more testimonials and daily trading updates
          </p>
        </div>
        <div className='community--btn'>
          Join Our Telegram Group
        </div>
      </div>
    </div>
  )
}

export default Community;