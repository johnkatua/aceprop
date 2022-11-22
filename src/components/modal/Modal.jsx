import React from 'react'
import './modal.css';

const Modal = ({ open, closeModal}) => {
  if (!open) return null;
  return (
    <div className='overlay'>
      <div onClick={closeModal} className='closeBtn'>X</div>
      <div className="modal--container">
        <div className="modal--item">Home</div>
        <div className="modal--item">Services</div>
        <div className="modal--item">Pricing</div>
        <div className="modal--item">Contact</div>
        <div className="modal--item">FAQ</div>
      </div>
    </div>
  )
}

export default Modal;