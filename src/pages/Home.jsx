import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Logos from '../components/Clients';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.substring(1));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Logos />
      {/*<CTA />*/}
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
