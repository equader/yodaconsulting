import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Logos from '../components/Clients';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Logos />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;