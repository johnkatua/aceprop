import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Introduction from './components/intro/Introduction';
import Benefits from './components/pages/benefits/Benefits';
import Challenge from './components/pages/challenges/Challenge';
import Community from './components/pages/community/Community';
import Contact from './components/pages/contact/Contact';
import Customers from './components/pages/customers/Customers';
import Directions from './components/pages/directions/Directions';
import Services from './components/pages/services/Services';
import Strategy from './components/pages/strategy/Strategy';
import Testimonials from './components/pages/testimonials/Testimonials';
import TradingView from './components/trading-view/TradingView';
import './styles/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Introduction />
      <TradingView />
      <Directions />
      <Services />
      <Benefits />
      <Challenge />
      <Contact />
      <Strategy />
      <Customers />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  )
}

export default App