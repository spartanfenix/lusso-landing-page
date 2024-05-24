import { useEffect, useState } from "react";
import Loading from "./Loading";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

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
          <Footer />
        </>
      )}
    </>
  );
};

export default Gallery;
