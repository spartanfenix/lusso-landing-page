import { useLocation } from "react-router-dom";
import portadaContacto from "../../assets/img/portadaContacto.png";
import portadaGaleria from "../../assets/img/portadaGaleria.png";
import portadaPaquetes from "../../assets/img/portadaPaquetes.png";
import portadaServicios from "../../assets/img/portadaServicios.png";
import portadaInicio from "../../assets/img/portadaInicio.png";
import Error404 from "../../assets/img/Error404.png";
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
        alt="Portadas Lusso Band"
      />
    </div>
  );
};

export default Hero;

const getBackgroundImage = (path: string) => {
  switch (path) {
    case "/":
      return portadaInicio;
    case "/services":
      return portadaServicios;
    case "/packets":
      return portadaPaquetes;
    case "/gallery":
      return portadaGaleria;
    case "/contact":
      return portadaContacto;
    case "*":
      return Error404;
    default: // Default image
      return Error404;
  }
};
