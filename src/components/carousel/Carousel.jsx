import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';
import './carousel.css'

function IntroCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true
  };
  return (
    <div className="intro--carousel">
        <Slider {...settings}>
          <div className="intro--carousel__left">
            <div className='intro--left__one'>
              <h2>Earn with zero hustle</h2>
              <p>
                Our team of professional traders will help you secure a
                Funded account and receive up to 90% of profits, 
                while we do all the hard work for you.
              </p>
              <a href='#challenge'>
                <button>
                    Get Started
                </button>
              </a>
            </div>
            <div className='intro--left__two'>
              <img
                src="assets/slide1.png"
                alt="First slide"
              /> 
            </div>
          </div>
          <div className="intro--carousel__left">
            <div className='intro--left__one'>
              <h2>Want to become A Funded Trader</h2>
              <p>
                We will help you PASS prop firm challenges and get a Funded Account.
              </p>
              <a href='#challenge'>
                <button>
                    Get Started
                </button>
              </a>
            </div>
            <div className='intro--left__two'>
              <img
                src="http://acepropfirmtraders.com/img/slide2.png"
                alt="First slide"
              /> 
            </div>
          </div>
        </Slider>
    </div>
  );
}

export default IntroCarousel;