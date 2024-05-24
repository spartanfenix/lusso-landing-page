import { useLocation } from "react-router-dom";
import portadaContacto from "../../assets/img/portadaContacto.png";
import portadaGaleria from "../../assets/img/portadaGaleria.png";
import portadaPaquetes from "../../assets/img/portadaPaquetes.png";
import portadaInicio from "../../assets/img/portadaInicio.png";
import { useMediaQuery } from "@mui/material";

const Hero = () => {
  const location = useLocation();
  const backgroundImage = getBackgroundImage(location.pathname);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="hero">
      <img
        style={{ marginTop: isMobile ? "56px" : "60px", width: "100vw" }}
        src={backgroundImage}
        alt={backgroundImage}
      />
    </div>
  );
};

export default Hero;

const getBackgroundImage = (path: string) => {
  switch (path) {
    case "/":
      return portadaInicio;
    case "/packets":
      return portadaPaquetes;
    case "/gallery":
      return portadaGaleria;
    case "/contact":
      return portadaContacto;
    default: // Default image
      return portadaInicio;
  }
};
