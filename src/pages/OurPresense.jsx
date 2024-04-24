import React from 'react'
import HeadingOne from '../components/HeadingOne';
// import bg from "../../src/assets/images/background.png";
// import "../../src/assets/styles/OurPresense.css"
import Presense from '../components/Presense';
import Footer from '../components/footer';
import Header from '../components/Header'
import Responsive from "../components/CardSlider/AllCards";


const OurPresense = () => {
  return (
  <>
    <Header></Header> 
    <br />
    {/* <HeadingOne text="Our Presense"></HeadingOne> */}
    <Presense></Presense>
    <br/>
    <Responsive/>
    <Footer></Footer>
</>
  )
}

export default OurPresense;