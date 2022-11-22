import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './customers.css';

const Customers = () => {
  return (
    <div className='customer--container'>
      <div className='customer--header'>
        Hear What Our Happy Clients Have To Say
      </div>
      <div className='customer--cards'>
        <div className="customer--cards__item">
          <img src="http://acepropfirmtraders.com/img/r1.png" alt="customer1" />
        </div>
        <div className="customer--cards__item">
          <img src="http://acepropfirmtraders.com/img/r2.png" alt="customer2" />
        </div>
        <div className="customer--cards__item">
          <img src="http://acepropfirmtraders.com/img/r4.png" alt="customer3" />
        </div>
      </div>
      <div className='customer--footer'>
        <div className='customer--footer__left'>
          Know our Trading Style <FaArrowRight size={30} color='blue'/>
        </div>
        <div className='customer--footer__right'>
          <p>
            Our company consists of 42 professional, experienced
            and profitable traders who execute trades MANUALLY
            using various strategies based on pure price 
            action and smart money concepts. Also, we utilize
            highly secured VPNs, since some prop firms don't 
            allow the use of EAs, copy trading softwares and 
            the use of same strategy on different accounts.
          </p>
          <p>
            We are fully aware of such and we are doing our 
            very best to make sure we don’t violate any 
            trading parameters while meeting their profit 
            target in the time provided and ensure that 
            all of our clients receive funding.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Customers;