import React from 'react';
import './testimonials.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Testimonials = () => {
  return (
    <div className='testimonials--container'>
      <div className='testimonials--header'>
        Testimonials
      </div>
      <div className='testimonials--details'>
        {/* <div>A</div> */}
        <div className='testimonials--details__image'>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial1.jpeg" alt="" />
              </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial2.jpeg" alt="" />
              </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial3.jpeg" alt="" />
            </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial4.jpeg" alt="" />
            </div>
              <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial5.jpeg" alt="" />
            </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial6.jpeg" alt="" />
              </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial7.jpeg" alt="" />
              </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial8.jpeg" alt="" />
            </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial9.jpeg" alt="" />
            </div>
              <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial10.jpeg" alt="" />
            </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial11.jpeg" alt="" />
              </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial12.jpeg" alt="" />
              </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial13.jpeg" alt="" />
            </div>
            <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial14.jpeg" alt="" />
            </div>
              <div className="testimonials--img">
              <img src="http://acepropfirmtraders.com/img/newtestimonial15.jpeg" alt="" />
            </div>
          </Carousel>
        </div>
        {/* <div>C</div> */}
      </div>
    </div>
  )
}

export default Testimonials