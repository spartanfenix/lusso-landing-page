import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Box, Grid, Typography } from "@mui/material";
import LussoInicio from "../../assets/img/lussoInicio.png";
import ImagenServicios from "../../assets/img/serviciosMusicales.png";
import HeroSlider from "../Hero/HeroSlider";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeroSlider />
          <Box
            component="form"
            sx={{
              maxWidth: "1000px",
              textAlign: "center",
              py: "2rem",
              px: "2rem",
              margin: "0 auto",
            }}
          >
            <Grid
              container
              spacing={2}
              columns={16}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={16} md={8} lg={8}>
                <Typography
                  variant="h6"
                  sx={{
                    margin: "0 auto",
                    py: 4,
                    px: 1,
                    textAlign: "justify",
                    maxWidth: 1000,
                  }}
                >
                  HAREMOS QUE TU FIESTA SEA{" "}
                  <strong>LA MAS PRENDIDA E INOLVIDABLE,</strong> TUS INVITADOS
                  NO VAN A PARAR DE BAILAR Y CELEBRAR CON NUESTRA MUSICA.
                </Typography>
              </Grid>
              <Grid item xs={16} md={8} lg={8}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  src={LussoInicio}
                  alt="Banda Lusso"
                />
              </Grid>
              <Grid item xs={10} md={5} lg={5}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    my: 5,
                  }}
                  src={ImagenServicios}
                  alt="Eventos Sociales o Empresariales"
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
