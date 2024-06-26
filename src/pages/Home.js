// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CardSection from '../components/CardSection';
import Footer from '../components/footer';
import Responsive from "../components/CardSlider/AllCards";
import CNavbar from '../components/navbar';
const Home = () => {
  return (
    <div>
      <CNavbar/>
      <Hero/>
      <CardSection/>
      <Responsive/>
      <Footer />
    
    </div>
    
    
    
  );
};

export default Home;
