// src/components/common/Header.js
import React from 'react';
import logo from '../../src/assets/images/logo.jpeg';
import logo2 from '../../src/assets/images/logo2.jpeg';
import logo3 from '../../src/assets/images/logo3.png';
import '../../src/assets/styles/header.css';
import {  Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook,faXTwitter,faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo2}
              alt="Logo"
              width="75"
              height="30"
              class="d-inline-block align-text-top"
            />
          </a>
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="75"
              height="30"
              class="d-inline-block align-text-top"
            />
          </a>

          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get Funded
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Brands
              </a>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Venture Wolf
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Wolf Den
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Alpha Wolf Club
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Values
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Presence
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/journey"
                role="button"
                aria-expanded="false"
              >
                Journey
              </a>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Media
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gallery
                  </a>
                </li>
                
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>

          
          </ul>

          {/*
          <ul className="nav nav-underline">
             <li className="nav-item">
             </a>
                className="nav-link"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i> 
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i> 
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul> */}

<div className="mail-icon">
                    <Stack direction="horizontal" className="justify-content-between">
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></div>
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faFacebook} /></a></div>
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faYoutube} /></a></div>
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faXTwitter} /></a></div>
                        <div className="icons"><a href='#'><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
                    </Stack>
                </div>

        </div>
      </nav>
    </nav>
  );
};

export default Header;
