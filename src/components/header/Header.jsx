import React, { useState, useEffect } from 'react';
import './header.css'

const Header = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width]);

  const isMobile = width < 768 ? true : false;
  return (
    <div className='header--container'>
      <div className='header--logo'>
        <img src='../../assets/logo.png' />
      </div>
      <div className='header--nav'>
        {!isMobile ? (
        <>
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
        </>
        ): <div className='header--mobile__opener'>Mobile</div>}
      </div>
    </div>
  )
}

export default Header;