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

// Configuración del slider
const settings = {
  dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
};

const slides = [
  {
    background: Portada1,
    textImage: Texto1,
  },
  {
    background: Portada2,
    textImage: Texto2,
  },
  {
    background: Portada3,
    textImage: Texto3,
  },
];

const HeroSlider = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1365px)");
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
          //   <Box
          //     key={index}
          //     sx={{
          //       width: "100vw",
          //       background: `url(${slide.background})`,
          //       backgroundRepeat: "no-repeat",
          //       backgroundSize: "cover",
          //       backgroundPosition: "center",
          //       position: "relative",
          //       "@media (max-width: 600px)": {
          //         backgroundSize: "contain",
          //         height: "25vh",
          //       },
          //       "@media (min-width: 600px) and (max-width: 960px)": {
          //         backgroundSize: "contain",
          //         height: "50vh",
          //       },
          //       "@media (min-width: 960px)": {
          //         backgroundSize: "cover",
          //         height: "100vh",
          //       },
          //     }}
          //   >
          //     <Box
          //       component="img"
          //       src={slide.textImage}
          //       alt="Texto portada"
          //       sx={{
          //         position: "absolute",
          //         top: "50%",
          //         left: "50%",
          //         transform: "translate(-50%, -50%)",
          //         width: isMobile ? "50%" : "80%",
          //         maxWidth: "600px",
          //       }}
          //     />
          //   </Box>
          <div key={index}>
            <img
              style={{ marginTop: isMobile ? "56px" : "60px", width: "100vw" }}
              src={slide.background}
              alt="Portadas Lusso Band"
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
