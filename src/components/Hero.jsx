import React from 'react';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const Header = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner h-100">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={image1} class="d-block w-100" alt="..." />
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex justify-content-center">
              <span className="navbar-brand text-white">Venture Wolf - Your Leading Venture Partner</span>
            </div>
          </nav>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={image2} class="d-block w-100" alt="..." />
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex justify-content-center">
              <span className="navbar-brand text-white">Wolf Den - Your Leading Wolf Partner</span>
              
            </div>
          </nav>
        </div>
        <div class="carousel-item">
          <img src={image3} class="d-block w-100" alt="..." />
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex justify-content-center">
              <span className="navbar-brand text-white">Alpha Wolf Club - Your Leading Alpha Partner</span>
              
            </div>
          </nav>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
