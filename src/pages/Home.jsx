import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Comparison from '../components/Comparison';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Process from '../components/Process';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Appliance Vista - Trusted Home Appliance Repair Services</title>
        <meta name="description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified technicians, same-day service, fair pricing." />
        <link rel="canonical" href="https://www.appliancevista.shop/" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Appliance Vista - Trusted Home Appliance Repair Services" />
        <meta property="og:description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified technicians, same-day service, fair pricing." />
        <meta property="og:image" content="https://www.appliancevista.shop/logo/logo.png" />
        <meta property="og:url" content="https://www.appliancevista.shop/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <Highlights />
      <About />
      <Stats />
      <Services />
      <Comparison />
      <Process />
      <FAQ />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;

