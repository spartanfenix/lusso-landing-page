import { useEffect, useState } from "react";
import Loading from "./Loading";
import SliderYoutube from "../Sliders/SliderYoutube";
import { Box } from "@mui/material";
import SliderPhotos from "../Sliders/SliderPhotos";
import HeroVideo from "../Hero/HeroVideo";

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeroVideo />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "100vh",
              my: "2rem",
            }}
          >
            <SliderPhotos />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "100vh",
              my: "2rem ",
            }}
          >
            <SliderYoutube />
          </Box>
        </>
      )}
    </>
  );
};

export default Gallery;
