import React, { useState, useEffect } from 'react';
import './header.css';
import Modal from '../modal/Modal';
import HeaderOverlay from '../headerOverlay/HeaderOverlay';
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  const [width, setWidth] = useState(0);
  const [openModal, setOpenModal] = useState(false);

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
    <div className='header--container' id="header--box">
      <div className='header--logo'>
        <img src='../../assets/logo.png' />
      </div>
      <div className='header--nav'>
        {!isMobile ? (
        <>
          <div className='header--links'>
            <a href="#intro">
              Home
            </a>
            <a href="#service">
              Services
            </a>
            <a href="#challenge">
              Pricing
            </a>
            <a href="#contact">
              Contact
            </a>
            <a href="#footer">
              FAQ
            </a>
          </div>
          <div className='header--btn'>
            <a href='https://t.me/Emman_4X' target="_blank" rel="noopener noreferrer">
              Join Our Telegram Community
            </a>
          </div>
        </>
        ): (
          <div className='header--mobile__opener' onClick={() => setOpenModal(true)}>
            <FiMenu fontSize={"2rem"} />
          </div>
          )}
      </div>
      <Modal open={openModal} content={<HeaderOverlay closeModal={() => setOpenModal(false)} />} />
    </div>
  )
}

export default Header;