import React from 'react'

const HeaderOverlay = ({ closeModal }) => {
  return (
    <div>
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

export default HeaderOverlay