import { useEffect, useState } from "react";
import Loading from "./Loading";
import Hero from "../Hero/Hero";

const Services = () => {
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
        </>
      )}
    </>
  );
};

export default Services;
