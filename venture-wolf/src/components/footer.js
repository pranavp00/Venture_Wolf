// Footer.js

import React from 'react';
import {  Row, Col, Stack } from 'react-bootstrap';
import './footer.css';
import logo from '../assets/images/footer-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook,faXTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    

    <footer className="footer bg-dark text-white w-100">
      
        <Row className="justify-content-between align-items-start row row-cols-1 row-cols-md-2">
          <Col md={3} className="d-flex text-left logo-col">
            <Stack className = 'stack'>
                <img src={logo} alt="Your Logo" className="logo" />
                <div className="mail-icon"><a href = '#'><FontAwesomeIcon icon={faEnvelope} /> funding@venturewolf</a></div>
                <div className="mail-icon">
                    <Stack direction="horizontal" className="justify-content-between">
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></div>
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faFacebook} /></a></div>
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faYoutube} /></a></div>
                        <div className="icons"><a href='#'></a><FontAwesomeIcon icon={faXTwitter} /></div>
                    </Stack>
                </div>
            </Stack>
          </Col>
          <Col md={1} className="sitemaps">
            <ul className="list-unstyled ">
              <li><a href="#">Home</a></li>
            </ul>
          </Col>
          <Col md={1} className="sitemaps">
            <ul className="list-unstyled ">
              <li><a href="#">About Us</a></li>
            </ul>
          </Col>
          <Col md={1} className="sitemaps">
            <ul className="list-unstyled ">
            <li><a href="#">Services</a></li>
            </ul>
          </Col>
          <Col md={1} className="sitemaps">
            <ul className="list-unstyled ">
            <li><a href="#">Our Values</a></li>
            </ul>
          </Col>
          <Col md={1} className="sitemaps">
            <ul className="list-unstyled ">
              <li><a href="#">Gallery</a></li>
            </ul>
          </Col>
          <Col md={1} className="sitemaps">
            <ul className="list-unstyled ">
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>

          
          
        </Row>
      
      <div className="text-center  copyright" >
        © {new Date().getFullYear()} Copyright:<a className="" href="#"> Venture Wolf</a>
      </div>
    </footer>
  );
};

export default Footer;
