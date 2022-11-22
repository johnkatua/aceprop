import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className='header--container'>
      <div className='header--logo'>
        <img src='../../assets/logo.png' />
      </div>
      <div className='header--nav'>
        <div className='header--links'>
          <div>Home</div>
          <div>Services</div>
          <div>Pricing</div>
          <div>Contact</div>
          <div>FAQ</div>
        </div>
        <div className='header--btn'>
          Join Our Telegram Community
        </div>
      </div>
    </div>
  )
}

export default Header;