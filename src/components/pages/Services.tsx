import { useEffect, useState } from "react";
import Loading from "./Loading";
import Hero from "../Hero/Hero";
import MusicalServices from "../MusicalServices/MusicalServices";
import { Stack, useMediaQuery } from "@mui/material";

const Services = () => {
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
          <Stack
            direction={isTablet ? "column" : "row"}
            justifyContent="space-evenly"
            alignItems={isTablet ? "center" : "flex-start"}
            useFlexGap
            flexWrap="wrap"
            spacing={{ xs: 5, sm: 5, md: 2, lg: 2, xl: 1 }}
            margin="4rem 0"
          >
            <MusicalServices servicesType={"lusso"} />
            <MusicalServices servicesType={"viaggio"} />
            <MusicalServices servicesType={"eleva"} />
          </Stack>
        </>
      )}
    </>
  );
};

export default Services;
