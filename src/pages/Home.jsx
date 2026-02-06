import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

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
        <meta name="description" content="Reliable home appliance repair services near you. We specialize in washing machines, refrigerators, ACs, and more. Certified technicians, same-day service, and affordable pricing." />
        <link rel="canonical" href="https://www.appliancevista.shop/" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Appliance Vista - Trusted Home Appliance Repair Services" />
        <meta property="og:description" content="Expert appliance repair for your home. Fast, reliable, and certified technicians for all major brands." />
        <meta property="og:image" content="https://www.appliancevista.shop/logo/logo.png" />
        <meta property="og:url" content="https://www.appliancevista.shop/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;

