import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Grid } from "@mui/material";
import Hero from "../Hero/Hero";
import FormContactS from "../FormContact/FormContactS";

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
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ margin: 0, width: "100%" }}
          >
            <FormContactS />
          </Grid>
        </>
      )}
    </>
  );
};

export default Contact;
