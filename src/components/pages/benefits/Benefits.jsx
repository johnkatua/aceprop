import React from 'react';
import './benefits.css'

const Benefits = () => {
  return (
    <div className='benefits--container'>
      <div className='benefits--left'>
        <div className='benefits--cards'>
          <div className="benefits--cards__items">
            <div className='benefits--item__header'>
              1450+
            </div>
            <div className='benefits--item--tag'>
              Passed Evaluations
            </div>
          </div>
          <div className="benefits--cards__items">
            <div className='benefits--item__header'>
              6
            </div>
            <div className='benefits--item--tag'>
              Years in Service
            </div>
          </div>
          <div className="benefits--cards__items">
            <div className='benefits--item__header'>
              1200+
            </div>
            <div className='benefits--item--tag'>
              Happy Funded Traders
            </div>
          </div>
          <div className="benefits--cards__items">
            <div className='benefits--item__header'>
              80+
            </div>
            <div className='benefits--item--tag'>
              Countries Served
            </div>
          </div>
        </div>
        <div className='benefits--item--submit'>
          Submit Your Account & Start Earning.
        </div>
        <a href='#challenge'>
          <div className='benefits--item--started'>
            Get Started
          </div>
        </a>
      </div>
      <div className='benefits--right'>
        <div className='benefits--right__header'>
          Benefits of Being Funded
        </div>
        <div className='benefits--right__content'>
          <p>
            Being funded allows you to have capital that you as a 
            retail trader wouldn't be able to come up with or, 
            you don't have enough time due to a busy schedule, 
            risking your own money or life savings in this case 
            can be more complicated than using someone else's 
            money to trade and you get to keep 90% of whatever 
            is made after being funded.
          </p>
          <p>
            Trading on small accounts with the hope of doubling or 
            tripling the account, which ends up blowing due to 
            aggressive trading style, is why the majority of 
            retail traders do not achieve success in trading 
            after several years of suffering on blowing accounts.
          </p>
          <p>
            Instead of trading on your $500 live account 
            and aiming for a $10,000 return in a month 
            (which is an unreasonable target), we recommend 
            getting yourself funded and start earning a 
            10% return on a $100,000 account. This way 
            you will be earning with less risk, pressure, and greed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Benefits;