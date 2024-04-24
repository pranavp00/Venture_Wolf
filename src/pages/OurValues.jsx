import React from 'react'
// import "../../src/assets/styles/OurValues.css";
import "../../src/assets/styles/OurValues.css";
import Header from '../components/Header'
import Footer from '../components/footer'
import CardSectionOV from '../components/CardSectionOV'
import Responsive from '../components/CardSlider/AllCards';
const OurValue = () => {
  return (
    <>
    <Header/>
    <CardSectionOV/>
    <Responsive/>
    <Footer/>
    </>

  )
}

export default OurValue;