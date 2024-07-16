import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ServicioLusso from "../../assets/img/servicioLusso.png";
import ServicioViaggio from "../../assets/img/servicioViaggio.png";
import ServicioEleva from "../../assets/img/servicioEleva.png";
import TextoServicioLusso from "../../assets/img/textoServicioLusso.png";
import TextoServicioViaggio from "../../assets/img/textoServicioViaggio.png";
import TextoServicioEleva from "../../assets/img/textoServicioEleva.png";
import { Link } from "react-router-dom";

interface MusicalServicesProps {
  servicesType: "lusso" | "viaggio" | "eleva";
}

const servicesImage = {
  lusso: ServicioLusso,
  viaggio: ServicioViaggio,
  eleva: ServicioEleva,
};
const servicesText = {
  lusso: TextoServicioLusso,
  viaggio: TextoServicioViaggio,
  eleva: TextoServicioEleva,
};
const servicesDescription = {
  lusso:
    "haremos que tu fiesta se la mas prendida e inolvidable, tus invitados no van a parar de bailar y celebrar con nuestra música que abarca todos los generos y gustos garantizando diversión para todos",
  viaggio:
    "somos exquisitos y elegantes éxitos nacionales e internacionales en arreglos del género bossa, funk, vintage, smooth, jazz, latín, ideal para el coctel o banquete",
  eleva:
    "nuestros músicos elevarán su enlace a un nivel celestial, creando una atmósfera única y emotiva mientras caminas hacia al altar",
};

const MusicalServices = ({ servicesType }: MusicalServicesProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1365px)");
  return (
    <Card
      sx={{ maxWidth: isMobile ? "240px" : isTablet ? "480px" : "380px" }}
      style={{ margin: "1rem 0" }}
    >
      <CardActionArea component={Link} to="/contact">
        <CardMedia
          component="img"
          image={servicesImage[servicesType]}
          alt={`Servicio ${servicesType}`}
          loading="lazy"
        />
        <CardMedia
          component="img"
          image={servicesText[servicesType]}
          alt="Servicios"
          style={{ padding: "2rem 2rem" }}
          loading="lazy"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant={isMobile ? "body1" : "h6"}
            component="div"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {servicesDescription[servicesType]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MusicalServices;
