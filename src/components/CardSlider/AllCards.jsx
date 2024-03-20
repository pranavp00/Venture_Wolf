import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import BasicCard from "./BasicCard";
import { Ourvalues } from "../../DummyData";
import './AllCards.css'
import HeadingTwo from "../HeadingTwo";
// import HeadingOne from "../HeadingOne/HeadingOne";
import HeadingFour from "../HeadingFour";
// import React from 'react'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      // fade:true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 2,
      // adaptiveHeight: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1064,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 676,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    return (
    <div>
        <HeadingTwo text={"Happy Customers"}/>
        <HeadingFour text={"Word is getting out. Industry experts are raving"}/>
        
        <div className="cardSlider">
        <center>
        <Slider {...settings}>
          {Ourvalues.map((item,index) => {
            return(
              <React.Fragment key={index}>
                <BasicCard item={item}/>
              </React.Fragment>
            )
          })}
        </Slider>
        </center>
        </div>
      </div>
    );
  }
}
