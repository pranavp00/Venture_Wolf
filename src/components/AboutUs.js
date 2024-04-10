import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          
          <div className="col-md-5">
            <h2 className="section-heading">Ventrue Wolf</h2>
            <p className="section-text">
              <strong>Venture Wolf</strong> is a consultancy firm specializing in helping
              startups and MSMEs secure funding. We have a network of 5000+ investors and
              vast business connections that empower us to propel businesses forward.
            </p>
          </div>
          <div className="col-md-7">
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
