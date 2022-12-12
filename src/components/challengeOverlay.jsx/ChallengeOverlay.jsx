import React, { useState } from 'react';
import './challengeOverlay.css';
import Select from 'react-select';

const options = [
  { value: 'usd', label: 'USD' },
  { value: 'kes', label: 'KES' },
  { value: 'aed', label: 'AED' },
  { value: 'cad',  label: 'CAD' },
  { value: 'eur', label: 'EUR' }
]

const ChallengeOverlay = ({ closeModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className='challenge--overlay'>
      <div className="challenge--overlay__item">
        <div className='challnge--overlay__firstName'>
          <label>First Name:</label>
          <span onClick={closeModal}>X</span>
        </div>
        <input type="text" placeholder='Text Input' />
      </div>
      <div className="challenge--overlay__item">
        <label>Last Name:</label>
        <input type="text" placeholder='Text Input' />
      </div>
      <div className="challenge--overlay__item">
        <label>Email:</label>
        <input type="email" placeholder='Email' />
      </div>
      <div className='challenge--overlay__currency'>
        <div>Currency</div>
        <Select 
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <button>Submit</button>
    </div>
  )
}

export default ChallengeOverlay