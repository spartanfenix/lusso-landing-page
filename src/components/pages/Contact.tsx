import { useEffect, useState } from "react";
import Loading from "./Loading";
import FormContact from "../FormContact/FormContact";
import { Grid } from "@mui/material";
import Hero from "../Hero/Hero";

const Contact = () => {
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
          <Grid container justifyContent="center" alignItems="center">
            <FormContact />
          </Grid>
        </>
      )}
    </>
  );
};

export default Contact;
