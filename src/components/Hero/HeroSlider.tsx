import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, useMediaQuery } from "@mui/material";

import Portada1 from "../../assets/img/portadaInicio1.png";
import Portada2 from "../../assets/img/portadaInicio2.png";
import Portada3 from "../../assets/img/portadaInicio3.png";
import Texto1 from "../../assets/img/textoPortada1.png";
import Texto2 from "../../assets/img/textoPortada2.png";
import Texto3 from "../../assets/img/textoPortada3.png";

import Portada1Movil from "../../assets/img/portadaInicio1Movil.jpg";
import Portada2Movil from "../../assets/img/portadaInicio2Movil.jpg";
import Portada3Movil from "../../assets/img/portadaInicio3Movil.jpg";
import Texto1Movil from "../../assets/img/textoPortada1Movil.png";
import Texto2Movil from "../../assets/img/textoPortada2Movil.png";
import Texto3Movil from "../../assets/img/textoPortada3Movil.png";

// Configuración del slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
};

const slides = [
  {
    background: Portada1,
    textImage: Texto1,
    backgroundMovil: Portada1Movil,
    textImageMovil: Texto1Movil,
  },
  {
    background: Portada2,
    textImage: Texto2,
    backgroundMovil: Portada2Movil,
    textImageMovil: Texto2Movil,
  },
  {
    background: Portada3,
    textImage: Texto3,
    backgroundMovil: Portada3Movil,
    textImageMovil: Texto3Movil,
  },
];

const HeroSlider = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1279px)");

  return (
    <Box
      style={{
        marginTop: isMobile ? "56px" : isTablet ? "30px" : "60px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: isTablet ? "100vh" : "100vh",
              backgroundImage: `url(${
                isMobile ? slide.backgroundMovil : slide.background
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={isMobile ? slide.textImageMovil : slide.textImage}
              alt="Texto portada"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: isMobile ? "85%" : "80%",
                maxWidth: "600px",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
