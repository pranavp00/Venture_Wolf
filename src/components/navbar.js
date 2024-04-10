import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/images/footer-logo.jpg';
import './navbar.css';

const CNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '100px' }}>
      <Container fluid>
        <Navbar.Brand href="venture_wolf.html" style={{ paddingRight: '5%' }}>
          <img src={Logo} style={{ width: '250px' }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" style={{ marginRight: '3vh', fontSize: '20px' }}>Get Funded</Nav.Link>
            <NavDropdown 
              title="Brands" 
              id="basic-nav-dropdown" 
              style={{ marginRight: '3vh', fontSize: '20px' }}
              menuVariant="dark"
            >
              <NavDropdown.Item href="./venturewolf" style={{ color: 'white' }}>Venture Wolf</NavDropdown.Item>
              <NavDropdown.Item href="./wolfdenclub" style={{ color: 'white' }}>Wolf Den</NavDropdown.Item>
              <NavDropdown.Item href="#" style={{ color: 'white' }}>Alpha Wolf Club</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown 
              title="About Us" 
              id="basic-nav-dropdown" 
              style={{ marginRight: '3vh', fontSize: '20px' }}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#" style={{ color: 'white' }}>Services</NavDropdown.Item>
              <NavDropdown.Item href="#" style={{ color: 'white' }}>Values</NavDropdown.Item>
              <NavDropdown.Item href="#" style={{ color: 'white' }}>Presence</NavDropdown.Item>
              <NavDropdown.Item href="#" style={{ color: 'white' }}>Founder</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown 
              title="Journey" 
              id="basic-nav-dropdown" 
              style={{ marginRight: '3vh', fontSize: '20px' }}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#" style={{ color: 'white' }}>Media</NavDropdown.Item>
              <NavDropdown.Item href="#" style={{ color: 'white' }}>Gallery</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#" style={{ marginRight: '3vh', fontSize: '20px' }}>Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://www.facebook.com/venturewolfindia/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/company/venturewolf" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></Nav.Link>
            <Nav.Link href="https://www.youtube.com/@venturewolfdevangraja6849" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/venturewolf.official/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
            <Nav.Link href="https://twitter.com/venturewolfoff?t=5_cxvs_FsFjh_N9bPcfQFA&amp;s=08" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CNavbar;
