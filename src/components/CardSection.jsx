// src/components/common/Footer.js
import React from 'react';
import image1 from '../assets/images/image1.jpg';
// import styles from '../assets/styles/cardsection.module.css';
import "../assets/styles/cardsection.css";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="button-container">
      <button type="button" className="btn btn-gradient btn-lg">
        LOOKING TO RAISE FUNDS
      </button>
      <button type="button" className="btn btn-gradient btn-lg">
        LOOKING TO INVEST
      </button>
      <button type="button" className="btn btn-gradient btn-lg">
        LOOKING TO ENTER INDIAN MARKETS
      </button>
      <button type="button" className="btn btn-gradient btn-lg">
        BE OUR VENTURE PARTNER
      </button>
    </div>
      <hr />
      
    </>
  );
};

export default Footer;
