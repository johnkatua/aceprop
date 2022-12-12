import React from 'react'

const HeaderOverlay = ({ closeModal }) => {
  return (
    <div>
      <div onClick={closeModal} className='closeBtn'>X</div>
      <div className="modal--container">
        <div className="modal--item" onClick={closeModal}>
          <a href='#intro'>
            Home
          </a>
        </div>
         <div className="modal--item" onClick={closeModal}>
          <a href='#service'>
            Services
          </a>
        </div>
         <div className="modal--item" onClick={closeModal}>
          <a href='#challenge'>
            Pricing
          </a>
        </div>
         <div className="modal--item" onClick={closeModal}>
          <a href='#contact'>
            Contact
          </a>
        </div>
         <div className="modal--item" onClick={closeModal}> 
          <a href='#footer'>
            FAQ
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderOverlay