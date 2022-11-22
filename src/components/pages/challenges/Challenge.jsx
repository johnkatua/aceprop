import React from 'react';
import { challengeData } from '../../../data';
import './challenge.css';

const Challenge = () => {
  return (
    <div className='challenge--container'>
      <div className='challenge--head'>
        CHALLENGE AND VERIFICATION
      </div>
      <div className='challenge--text'>
        You are now ready to submit your account for
        evaluation pass service. Carefully select 
        the account size that was purchased from a 
        Prop Firm and let us PASS the evaluation 
        for you. Our Dedicated Team of Traders 
        will start trading your evaluation as 
        you complete the checkout process.
      </div>
      <div className='challenge--card__container'>
        {challengeData.map((item) => (
          <div className='challenge--card'>
            <div className='challenge--price'>
              {item.price}
            </div>
            <div className='challenge--amount__container'>
              <span className='challenge--amount'>{item.amount}</span>
              /
              <span>{item.name}</span>
            </div>
            <hr />
            <div className="challenge--details">
              <span className='challenge--icon'>
                <img src={item.first.icon} alt='bull icon' />
              </span>
              <span>
                {item.first.details}
              </span>
            </div>
            <div className="challenge--details">
              <span className='challenge--icon'>
                <img src={item.first.icon} alt='bull icon' />
              </span>
              <span>
                {item.second.details}
              </span>
            </div>
            <div className="challenge--details">
              <span className='challenge--icon'>
                <img src={item.first.icon} alt='bull icon' />
              </span>
              <span>
                {item.third.details}
              </span>
            </div>
            <div className="challenge--details">
              <span className='challenge--icon'>
                <img src={item.first.icon} alt='bull icon' />
              </span>
              <span>
                {item.fourth.details}
              </span>
            </div>
            <div className="challenge--details">
              <span className='challenge--icon'>
                <img src={item.first.icon} alt='bull icon' />
              </span>
              <span>
                {item.fifth.details}
              </span>
            </div>
            <div className="challenge--details">
              <span className='challenge--icon'>
                <img src={item.first.icon} alt='bull icon' />
              </span>
              <span>
                {item.sixth.details}
              </span>
            </div>
            <div className="challenge--details">
             <span className='challenge--icon'>
                <img src={item.first.icon} alt='bull icon' />
              </span>
              <span>
                {item.seventh.details}
              </span>
            </div>
            <button className='challenge--btn'>
              Start Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Challenge;