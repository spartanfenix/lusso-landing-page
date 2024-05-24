import { useEffect, useState } from "react";
import Loading from "./Loading";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

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
          <Hero />

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
