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
        <title>Appliance Vista - Trusted Appliance Repair Experts | Same Day Service</title>
        <meta name="description" content="Looking for reliable appliance repair? Appliance Vista offers expert repair services for washing machines, fridges, ACs & more. Fast, affordable & certified technicians. Book your service today!" />
        <link rel="canonical" href="https://www.appliancevista.shop/" />
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

