import { Box } from "@mui/material";
import PortadaGaleria from "../../assets/img/portadaGaleria.mp4";

const HeroVideo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        marginTop: "56px",
        height: "0",
        paddingBottom: "56.25%",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <video
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={PortadaGaleria} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default HeroVideo;
