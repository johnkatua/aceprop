import React from 'react';
import './services.css'

const Services = () => {
  return (
    <div className='services--container' id="service">
      <div className='services--header'>
        Our Services
      </div>
      <div className='services--details'>
        <div className="services--item">
          <div className='services--item--title'>
            01. Challenge Pass
          </div>
          <div className='services--item--body'>
            To attain 10% or 8% depending on the preffered proportion. 
            Our team of traders, on average of 5 - 10 days usually 
            ensure a successful pass of the trading parametersof 
            the first stage of the Evaluation phase and advance
            into the second stage or phase.
          </div>
        </div>
        <div className="services--item">
          <div className='services--item--title'>
            02. Verification Pass
          </div>
          <div className='services--item--body'>
            Before getting Funded we will also have to PASS
            the second stage which is verification by hitting
            half the target which is 5% or 4% of the account balance.
          </div>
        </div>
        <div className="services--item">
          <div className='services--button--tag'>
            <a href='#challenge'>
                <button className='services--button'>
                    EARN REAL MONEY
                </button>
              </a>
          </div>
          <div className='services--item--title'> 
            03. Funded Account Management
          </div>
          <div className='services--item--body'>
            We aim for a minimum of 10% gain every month on all account
            sizes. Our profit split rate is 15% of the total profit
            figure whereas account owner you remain with 75% 
            and prop firm secure their share of 10%.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;