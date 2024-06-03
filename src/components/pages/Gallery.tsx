import { useEffect, useState } from "react";
import Loading from "./Loading";
import Hero from "../Hero/Hero";
import SliderYoutube from "../Sliders/SliderYoutube";
import { Box } from "@mui/material";

const Gallery = () => {
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "50vh",
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
