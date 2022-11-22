import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function UncontrolledExample() {
  return (
    <Carousel fluid="lg" className='teta'>
      <Carousel.Item className='carousel--item' >
        <div className='carousel--details'>
          <div className='intro--details__left'>
            <h2>Earn with Zero hustle</h2>
            <p>
              Our team of professional traders will help you secure a
              Funded account and receive up to 90% of profits, 
              while we do all the hard work for you.
            </p>
            <button>
              Get Started
            </button>
          </div>
          <div className='intro--details__right'>
            <img
              // className='h-100'
              src="assets/slide1.png"
              alt="First slide"
            /> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='carousel--item'>
        <div className='carousel--details'>
          <div className='intro--details__left'>
            <h2>Want to become A Funded Trader</h2>
            <p>
              We will help you PASS prop firm challenges and get a Funded Account.
            </p>
            <button>
              Get Started
            </button>
          </div>
          <div className='intro--details__right'>
            <img
              className='h-100'
              src="http://acepropfirmtraders.com/img/slide2.png"
              alt="First slide"
            /> 
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;