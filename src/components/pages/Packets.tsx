import { useEffect, useState } from "react";
import Loading from "./Loading";
import Hero from "../Hero/Hero";
import CardPacket from "../CardPacket/CardPacket";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

const Packets = () => {
  const isTablet = useMediaQuery("(max-width:1365px)");
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
          <Hero />
          <Typography
            variant="h6"
            sx={{
              margin: "0 auto",
              py: 4,
              px: 4,
              textAlign: "center",
              maxWidth: 1000,
            }}
          >
            Somos <strong>música y entretenimiento</strong>, comprometida con la
            excelencia para satisfacer a nuestros clientes. Los costos aplican
            para la zona de Puebla capital y Chuolula, tenemos diversión y
            calidad para fiestas diferentes o más pequeñas.
          </Typography>
          <Box
            sx={{
              maxWidth: isTablet ? "750px" : "1920px",
              margin: "0 auto",
              padding: "40px",
            }}
          >
            <Stack
              direction={isTablet ? "column" : "row"}
              justifyContent="space-evenly"
              alignItems="center"
              useFlexGap
              flexWrap="wrap"
              spacing={{ xs: 5, sm: 5, md: 2, lg: 2, xl: 1 }}
            >
              <CardPacket packetType={"essentials"} />
              <CardPacket packetType={"gold"} />
              <CardPacket packetType={"silver"} />
              <CardPacket packetType={"platinum"} />
            </Stack>
          </Box>
          <Typography
            variant="h6"
            sx={{
              margin: "0 auto",
              py: 4,
              px: 4,
              textAlign: "center",
              maxWidth: 1000,
            }}
          >
            Somos <strong>música y entretenimiento</strong>, comprometida con la
            excelencia para satisfacer a nuestros clientes. Los costos aplican
            para la zona de Puebla capital y Chuolula, tenemos diversión y
            calidad para fiestas diferentes o más pequeñas.
          </Typography>
        </>
      )}
    </>
  );
};

export default Packets;
