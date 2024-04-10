import React from 'react';
import Footer from '../components/footer';
import CNavbar from '../components/navbar';
import AboutVentureWolf from '../components/AboutVentureWolf';
import './venturewolf.css';
// import AboutUs from '../components/AboutUs';
const Venture_wolf = () => {
    return (
        <div>
            <CNavbar />
            {/* <AboutUs /> */}
            <section class="venture-wolf-section">
  <h2 class="title">Venture Wolf</h2>
  <p class="description">
    A consultancy firm specializing in helping startups and MSMEs secure funding. We have a network of 5000+ investors and vast business connections empower us to propel businesses forward.
  </p>
  <div class="features-container">
    <div class="feature feature-one">
      <h3>Long-Term Relationships</h3>
      <p class="feature-description">
        We prioritize building lasting connections with our clients.
      </p>
    </div>
    <div class="feature feature-two">
      <h3>Tailored Approach</h3>
      <p class="feature-description">
        We understand each company's specific needs and customize our services accordingly.
      </p>
    </div>
    <div class="feature feature-three">
      <h3>Comprehensive Support</h3>
      <p class="feature-description">
        From offering guidance to connecting businesses with investors and navigating fundraising complexities, Venture Wolf stands by entrepreneurs throughout the journey.
      </p>
    </div>
  </div>
</section>

    <AboutVentureWolf />
    <Footer />
        </div>
    )
}
export default Venture_wolf