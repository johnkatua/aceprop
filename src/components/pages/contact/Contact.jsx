import React from 'react';
import './contact.css';
import {FaEnvelope, FaInstagram, FaTelegram} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact--container'>
      <div className='contact--header'>
        <span>
          Don't see your favorite account size that works for you? We have other options. 
        </span>
        <span className='contact--more--option'>
          More Options &gt;
        </span>
      </div>
      <div className='contact--details'>
        <div className='contact--details--tag'>
          <b>Contact Us</b> Now To Get Started.
        </div>
        <div className='contact--media'>
          <div className='contact--media__item'>
            <FaTelegram/> Message Us Now on Telegram
          </div>
          <div className='contact--media__item'>
            <FaEnvelope/> Send Us an Email
          </div>
          <div className='contact--media__item'>
            <FaInstagram/> Message Us Now on Instagram
          </div>
        </div>
      </div>
      <div className='contact--footer'>
        Our customer support team will respond within seconds.
      </div>
    </div>
  )
}

export default Contact