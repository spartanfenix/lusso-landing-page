import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

import PhotoLusso1 from "../../assets/img/photos/lusso1.jpg";
import PhotoLusso2 from "../../assets/img/photos/lusso2.jpg";
import PhotoLusso3 from "../../assets/img/photos/lusso3.jpg";
import PhotoLusso4 from "../../assets/img/photos/lusso4.jpg";
import PhotoLusso5 from "../../assets/img/photos/lusso5.jpg";
import PhotoLusso6 from "../../assets/img/photos/lusso6.jpg";
import PhotoLusso7 from "../../assets/img/photos/lusso7.jpg";
import PhotoLusso8 from "../../assets/img/photos/lusso8.jpg";
import PhotoLusso9 from "../../assets/img/photos/lusso9.jpg";
import PhotoLusso10 from "../../assets/img/photos/lusso10.jpg";
import PhotoLusso11 from "../../assets/img/photos/lusso11.jpg";
import PhotoLusso12 from "../../assets/img/photos/lusso12.jpg";
import PhotoLusso13 from "../../assets/img/photos/lusso13.jpg";
import PhotoLusso14 from "../../assets/img/photos/lusso14.jpg";
import PhotoLusso15 from "../../assets/img/photos/lusso15.jpg";
import PhotoLusso16 from "../../assets/img/photos/lusso16.jpg";
import PhotoLusso17 from "../../assets/img/photos/lusso17.jpg";
import PhotoLusso18 from "../../assets/img/photos/lusso18.jpg";
import PhotoLusso19 from "../../assets/img/photos/lusso19.jpg";
import PhotoLusso20 from "../../assets/img/photos/lusso20.jpg";
const photos = [
  PhotoLusso1,
  PhotoLusso2,
  PhotoLusso3,
  PhotoLusso4,
  PhotoLusso5,
  PhotoLusso6,
  PhotoLusso7,
  PhotoLusso8,
  PhotoLusso9,
  PhotoLusso10,
  PhotoLusso11,
  PhotoLusso12,
  PhotoLusso13,
  PhotoLusso14,
  PhotoLusso15,
  PhotoLusso16,
  PhotoLusso17,
  PhotoLusso18,
  PhotoLusso19,
  PhotoLusso20,
];

const NextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
const PrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SliderPhotos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`PhotoLusso${index + 1}`} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPhotos;
