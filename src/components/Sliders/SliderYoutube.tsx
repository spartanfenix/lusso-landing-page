import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { CustomArrowProps } from "react-slick";
import { useMediaQuery } from "@mui/material";

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

const SliderYoutube = () => {
  const isTablet = useMediaQuery("(max-width:1365px)");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 1 : 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div
      className="slider-container"
      style={{
        justifyContent: "center",
        textAlign: "center",
        maxWidth: "85%",
        margin: "auto",
      }}
    >
      <Slider {...settings}>
        <div>
          <iframe
            width="448"
            height="252"
            src="https://www.youtube.com/embed/_5EQzkUSqqw?si=S5BBE1wYc6CoSSbA&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="448"
            height="252"
            src="https://www.youtube.com/embed/EP3R0gHddJY?si=8wrJLQ9RdXKPnr1b&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="448"
            height="252"
            src="https://www.youtube.com/embed/uthUYSkOrGE?si=F2pxsl41N7fwSuQD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="448"
            height="252"
            src="https://www.youtube.com/embed/dgYPOdm6v8E?si=mYjrDCnB8S8Bp7N3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="448"
            height="252"
            src="https://www.youtube.com/embed/hOcGMyvCWcw?si=Au7Q1QYAvtG_Uab0&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="448"
            height="252"
            src="https://www.youtube.com/embed/HXGcQjxE-00?si=cT9aiYUiQt7lhLS9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Slider>
    </div>
  );
};

export default SliderYoutube;
