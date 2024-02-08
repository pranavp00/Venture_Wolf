import React from 'react';
import journey1 from '../../src/assets/images/journey1.jpg';
import journey2 from '../../src/assets/images/journey2.jpg';
import news1 from '../../src/assets/images/news1.jpg';
import '../../src/assets/styles/journeycard.css';
const JourneyCard = () => {
  return (
    <>
      {/* <img src={image1} class="img-fluid" alt="..."></img> */}
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={journey1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={journey2} class="d-block w-100" alt="..." />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <span className="navbar-brand text-white">
            Started as a newbie, currently one of the leading companies in the
            sector !!
          </span>
        </div>
      </nav>
      {/* <p>Our Journey</p> */}
      <hr />
      <div className="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-1</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-2</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-3</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-4</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-5</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-6</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-7</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-8</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={news1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Journey Step-9</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-body">
                <a href="#" class="card-link">
                  Read Report
                </a>
                <a href="#" class="card-link">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      </div>
    </>
  );
};

export default JourneyCard;
