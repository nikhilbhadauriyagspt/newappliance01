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
        <title>Home - Felona Appliance Repair</title>
        <meta name="description" content="Welcome to Felona Repair. We offer expert repair services for all your home appliances. 24/7 support and affordable pricing." />
        <link rel="canonical" href="https://www.felonarepair.com/" />
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
