import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import GetFundedCards from '../components/GetFundedCards';
import MainSection from '../components/MainSection';
import HeadingTwo from '../../src/components/HeadingTwo';
import HeadingFour from '../../src/components/HeadingFour';
import '../../src/assets/styles/GetFunded.css';
import Responsive from '../components/CardSlider/AllCards';


const GetFunded = () => {
  return (
    <div>
      <Header/>
      <MainSection source={'../../src/assets/images/Background1GF.jpg'}/>
      <HeadingTwo text={'The sole objective of VENTURE WOLF is to help '}/>
      <HeadingFour text={'Startup and business at all stages to meet their funding needs'}/>
      <GetFundedCards/>
      <Responsive/>
      <Footer/>
    
    </div>
    
    
    
  );
};

export default GetFunded;