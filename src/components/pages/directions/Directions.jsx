import React from 'react';
import './directions.css';

const Directions = () => {
  return (
    <div className='directions--container'>
      <div className='directions--header'>
        <h2>
          How it works
        </h2>    
      </div>
      <div className='directions--details'>
        <div className="directions--item">
          <div className='directions--item--number'>1</div>
          <div className='directions--item--text'> 
            Get an Account From a Prop Firm of your Preference
          </div>
        </div>
        <div className="directions--item">
          <div className='directions--item--number'>2</div>
          <div className='directions--item--text'>
            Sign Up with Us for passing the Evaluation Stage
          </div>
        </div>
        <div className="directions--item">
          <div className='directions--item--number'>3</div>
          <div className='directions--item--text'>
            Become a Funded Trader after Evaluation
          </div>
        </div>
        <div className="directions--item">
          <div className='directions--item--number'>4</div>
          <div className='directions--item--text'>
            Start Earning Real Money on a Bi-Weekly Basis.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Directions