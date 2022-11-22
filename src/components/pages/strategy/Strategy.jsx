import React from 'react';
import './strategy.css';
import { StrategyData } from '../../../data';


const Strategy = () => {
  return (
    <div className='strategy--container'>
      <div className='strategy--header'>
        <p>Why Choose Us.</p>
      </div>
      <div className='strategy--card'>
        <>
          {StrategyData.map((item) => (
            <div className='strategy--card__item'>
              <div className='strategy--card__header'>
                <img src={item.icon} alt="strategy--icon" />
                <div>
                  {item.title}
                </div>
              </div>
              <div className='strategy--card__details'>
                {item.details}
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  )
}

export default Strategy;