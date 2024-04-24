import React from 'react'
import HeadingOne from '../components/HeadingOne';
import Header from '../components/Header';
import Footer from '../components/footer';
import MainSection from '../components/MainSection';
import ServiceCard from '../components/ServiceCard';
import Responsive from '../components/CardSlider/AllCards';

const Services = () => {
  return (
    <>
    <Header/>
    <MainSection source={'../../src/assets/images/Background1GF.jpg'}/>
    <br></br>
    <HeadingOne text={"Services Offered By Us"}></HeadingOne>
    <ServiceCard/>
    <Responsive/>
    <Footer/>
    </>
  )
}

export default Services;