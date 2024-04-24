import React from 'react'
import HeadingOne from '../components/HeadingOne';
import Presense from '../components/Presense';
import Footer from '../components/footer';
import Header from '../components/Header'
// import Responsive from "../components/CardSlider/AllCards";
import FounderC from '../components/FounderC';


const Founder = () => {
  return (
  <>
    <Header></Header> 
    <br />
    {/* <HeadingOne text="Our Presense"></HeadingOne> */}
    <FounderC></FounderC>
    <br/>
    {/* <Responsive/> */}
    <Footer></Footer>
</>
  )
}

export default Founder;