import { useState } from 'react';
import './footer.css';

import { Questions } from '../../data';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  const [selected, setSelected] = useState({});
  const handleClick = (i) => () => {
    setSelected((state) => ({
      ...state,
      [i]: !state[i]
    }))
  }
  const [ data  ] = Questions;
  let leftData = data.item1;
  let rightData = data.item2;

  return (
    <div className='footer' id="footer">
      <div className='footer--top'> 
        <div className="footer--top__box">
          <div className='footer--top__header'>
            Frequently Asked Questions.
          </div>
          <div className='footer--top__details'>
            Some of the most common questions asked about our Services.
          </div>
          <div className='footer--top__items'>
            <div className="footer--top__item">
              {leftData.map((item) => (
                <div key={item.id} className='footer--item'>
                  <div className='footer--item__name' onClick={handleClick(item.id)}>{item.name}</div>
                  {selected[item.id] && (<div className='footer--item__details'>{item.details}</div>)}
                </div>
              ))}
            </div>
            <div className="footer--top__item">
              {rightData.map((item) => (
                <div key={item.id} className='footer--item'>
                  <div className='footer--item__name' onClick={handleClick(item.id)}>{item.name}</div>
                  {selected[item.id] && (<div className='footer--item__details'>{item.details}</div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='footer--bottom'>
        <div className="footer--bottom__box">
          <div className='footer--icon__box'>
            <div className='footer--icon'>
              <img src="../../assets/logo.png" alt="logo" />
            </div>
            <div className='footer--icons--icon'>
              <a href='mailto:acefxtraders@gmail.com'>
                <li><FaEnvelope/> </li>
              </a>
              {/* <a href='https://www.instagram.com/acepropfirmtraders/' target="_blank" rel='noopener noreferrer'>
                <li><FaInstagram/></li>               
              </a> */}
              <a href='test' target="_blank" rel='noopener noreferrer'>
                <li><FaInstagram/></li>               
              </a>
            </div>
          </div>
          <div className='footer--links'>
            <div className="footer--links__card">
              <div className="footer--card__header">
                PropFirms We Use
              </div>
              <div className="footer--card__item">
                <a href='https://ftmo.com/en/' target="_blank" rel='noopener noreferrer'>
                  FTMO
                </a>
              </div>
              <div className="footer--card__item">
                <a href='https://myforexfunds.com/' target="_blank" rel='noopener noreferrer'>
                  My Forex Funds
                </a>
              </div>
              <div className="footer--card__item">
                <a href='https://www.traderseco.com/' target="_blank" rel='noopener noreferrer'>
                  Traders central Fund
                </a>
              </div>
              <div className="footer--card__item">
                <a href='https://www.theproptrading.com.au/' target="_blank" rel='noopener noreferrer'>
                  The Prop Trading
                </a>
              </div>
            </div>
            <div className="footer--links__card">
              <div className="footer--card__header">
                Links
              </div>
              <div className="footer--card__item">
                <a href='#intro'>
                  Home
                </a>
              </div>
              <div className="footer--card__item">
                <a href='#challenge'>
                  Pricing
                </a>
              </div>
              <div className="footer--card__item">
                <a href='#service'>
                  Services
                </a>
              </div>
              <div className="footer--card__item">
                <a href='#contact'>
                  Contact
                </a>
              </div>
            </div>
            <div className="footer--links__card">
              <div className="footer--card__header">
                Quick Links
              </div>
              <div className="footer--card__item">
                <a href='https://www.tradingview.com/' target="_blank" rel='noopener noreferrer'>
                  Trading View
                </a>
              </div>
              <div className="footer--card__item">
                <a href='https://www.forexfactory.com/' target="_blank" rel='noopener noreferrer'>
                  Forex Factory
                </a>
              </div>
              <div className="footer--card__item">
                <a href='https://www.babypips.com/' target="_blank" rel='noopener noreferrer'>
                  Baby Pips
                </a>
              </div>
            </div>
            <div className="footer--links__card">
              <div className="footer--card__header">
                Available Payment Methods
              </div>
              <div className="footer--card__item"><img src="http://acepropfirmtraders.com/img/payment.png" width={150} alt="mastercard" /></div>
            </div>
          </div>
          <div className='footer--break'>
            <span>
              Copyright ©2022 ACEFX Traders. All Rights Reserved.
            </span>
            <span>
              <hr />
            </span>
          </div>
          <div className="footer--para">
            <div className='footer--para__details'>
              <span className='footer--para__item'>
                Risk Disclosure: 
              </span>
              {" "}
              <span className='footer--para__bottom'>
                In the first instance, we are neither 
                a brokerage nor a prop firm and we do not provide accounts 
                to clients. Our tremendous work is neither affiliated nor 
                sponsored by any of the prop firms mentioned on this site, 
                alternatively, our core aim is to create unbiased awareness 
                and help the community of traders to get funded and make consistent 
                income through trading. Trading foreign exchange on margin carries 
                a high level of risk, and may not be suitable for all investors. 
                The high degree of leverage can work against you as well as for you. 
                Before deciding to invest in foreign exchange you should carefully 
                consider your investment objectives, level of experience, and risk appetite.
              </span>
            </div>
            <div>
              <span className='footer--para__item'>
                Refund Policy: 
              </span>
              {" "}
              <span className='footer--para__bottom'>
                We are tremendously proud to say that we have 
                never failed any challenge before. Nevertheless, we offer a 
                full money-back guarantee upon unsuccessful challenge completion. 
                However, we had a few challenge Repeats due to having a 
                positive balance when challenge time was almost over 
                (the owner submitted the account late with a massive drawdown in it) 
                so we first had to push it back to a positive balance and he was able 
                to be given a free challenge to repeat which we ended up passing. 
                ~ Your satisfaction is very important to us
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer