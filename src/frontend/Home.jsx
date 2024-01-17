import React from 'react';
import Navbar from './Navbar';
import Carasoul from './swiper/Carasoul';
import Cards from './cards/Cards';
import Footer from './footer/Footer';
import Contact from './contactPage/Contact';
import Services from './services/Services';

const Home = () => {
  return (
    <div className='home'>
      <Carasoul />
      <Cards />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
