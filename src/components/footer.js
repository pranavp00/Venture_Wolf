// Footer.js

// import React from 'react';
// import {  Row, Col, Stack } from 'react-bootstrap';
// import './footer.css';
import logo from '../assets/images/footer-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook,faXTwitter,faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './footer.css'; // Import the CSS file





import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>
        <p><a href = '#'><FontAwesomeIcon icon={faEnvelope} /> funding@venturewolf</a></p>
      </div>
      <div className="footer-right">
        <ul className="sitemap">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="social-icons">
          <div className="icons" style = {{marginRight: "10px"}}><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></div>
          <div className="icons" style = {{marginRight: "10px"}}><a href='#'><FontAwesomeIcon icon={faFacebook} /></a></div>
          <div className="icons" style = {{marginRight: "10px"}}><a href='#'><FontAwesomeIcon icon={faYoutube} /></a></div>
          <div className="icons" style = {{marginRight: "10px"}}><a href='#'></a><FontAwesomeIcon icon={faXTwitter} /></div>
          <div className="icons" style = {{marginRight: "10px"}}><a href='#'></a><FontAwesomeIcon icon={faLinkedinIn} /></div>
        </div>
      </div>
      <div className="footer-center">
      © {new Date().getFullYear()} Copyright:<a className="" href="#"> Venture Wolf</a>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   return (
    

//     <footer className="footer bg-dark text-white w-100">
      
//         <Row className="align-items-start row row-cols-1 row-cols-md-2">
//           <Col md={3} className="d-flex text-left logo-col">
//             <Stack className = 'stack'>
//             <img src={logo} alt="Your Logo" className="logo" />
       
//             </Stack>
//           </Col>
       
//           <Col md={1} className="sitemaps">
//             <ul className="list-unstyled ">
//               <li><a href="#">Get Funded</a></li>
//             </ul>
//           </Col>
//           <Col md={1} className="sitemaps">
//             <ul className="list-unstyled ">
//               <li><a href="#">Brands</a></li>
//             </ul>
//           </Col>
//           <Col md={1} className="sitemaps">
//             <ul className="list-unstyled ">
//             <li><a href="#">About Us</a></li>
//             </ul>
//           </Col>
//           <Col md={1} className="sitemaps">
//             <ul className="list-unstyled ">
//             <li><a href="#">Journey</a></li>
//             </ul>
//           </Col>
       
//           <Col md={1} className="sitemaps">
//             <ul className="list-unstyled ">
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </Col>

          
          
//         </Row>
//         <Row className="align-items-start row row-cols-1 row-cols-md-2">
//         <Col>
//         <div className="mail-icon" style ={{marginLeft: "3%"}}><a href = '#'><FontAwesomeIcon icon={faEnvelope} /> funding@venturewolf</a></div>
//         </Col>
//         <Col>
//         <div className="icon" >
//                     <Stack direction="horizontal" className="">
//                         <div className="icons" style = {{marginRight: "10px"}}><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></div>
//                         <div className="icons" style = {{marginRight: "10px"}}><a href='#'><FontAwesomeIcon icon={faFacebook} /></a></div>
//                         <div className="icons" style = {{marginRight: "10px"}}><a href='#'><FontAwesomeIcon icon={faYoutube} /></a></div>
//                         <div className="icons" style = {{marginRight: "10px"}}><a href='#'></a><FontAwesomeIcon icon={faXTwitter} /></div>
//                         <div className="icons" style = {{marginRight: "10px"}}><a href='#'></a><FontAwesomeIcon icon={faLinkedinIn} /></div>
//                     </Stack>
//                 </div>
//         </Col>
        
        
//         </Row>
        
        
      
//       <div className="text-center  copyright" >
//         © {new Date().getFullYear()} Copyright:<a className="" href="#"> Venture Wolf</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




