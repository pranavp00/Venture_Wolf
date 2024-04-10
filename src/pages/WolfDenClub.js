import React from 'react';
import Footer from '../components/footer';
import CNavbar from '../components/navbar';
import Wolfdenclubc from '../components/wolfdenclubc';
import CardSection from '../components/CardSection';
import Responsive from "../components/CardSlider/AllCards";


const WolfDenClub = () => {
    return (
        <div>
            <CNavbar />
            <Wolfdenclubc />
            <CardSection/>
            <Responsive/>
            <Footer />

        </div>
    )

}

export default WolfDenClub

