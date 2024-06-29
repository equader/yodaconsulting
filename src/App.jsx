import React from 'react';
import logo from './logo.svg'; 
import './App.css';
import Nav from './components/Nav'; 
import Hero from './components/Hero';
import Stats from './components/Stats'
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Logos from './components/Clients';
import CTA from './components/CTA';

export default function App() {
  return (
    <div>
      <Nav />
      <Hero/>
      <Stats/>
      <Services/>
      <Logos/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  );
}
