// src/components/common/Header.js
import React from 'react';
import logo from '../../assets/images/logo.jpeg';
import logo2 from '../../assets/images/logo2.jpeg';
import logo3 from '../../assets/images/logo3.png';
import '../../assets/styles/header.css';

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

            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Venture Wolf
              </a>
            </li> */}

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
                    Wolf Den
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Alpha Wolf Club
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Venture Wolf
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
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
                href="#"
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

          <ul className="nav nav-underline">
            <li className="nav-item">
              <a
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
                {/* <i className="fab fa-facebook"></i> */}
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
                {/* <i className="fab fa-facebook"></i> */}
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
                {/* <i className="fab fa-facebook"></i> */}
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Header;
