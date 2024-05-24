import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Lusso_Footer from "../../assets/img/lusso_footer.png";
import WhatsApp from "../../assets/icons/whatsapp_lusso.png";
import Mail from "../../assets/icons/mail_lusso.png";
import Facebook from "../../assets/icons/facebook_lusso.png";
import Instagram from "../../assets/icons/instagram_lusso.png";
import TikTok from "../../assets/icons/tiktok_lusso.png";
import YouTube from "../../assets/icons/youtube_lusso.png";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const textSend = "Hola, me interesa contratar sus servicios.";
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${Lusso_Footer})`,
        filter: "grayscale(100%) ",
      }}
    >
      <Box
        sx={{
          minHeight: "450px",
          width: "100vw",
          color: "#fefefe",
          textAlign: "center",
          py: "2rem",
        }}
      >
        <Typography sx={{ my: "1.5rem" }} variant="h6" gutterBottom>
          CONTÁCTANOS
        </Typography>
        <IconButton>
          <img
            style={{ width: "45px", height: "45px" }}
            src={WhatsApp}
            alt="WhatsApp Lusso"
            onClick={() =>
              window.open(`https://wa.me/522212212970?text=${textSend}`)
            }
          />
        </IconButton>
        <Typography sx={{ mt: "1px", mb: "1rem" }} variant="subtitle2">
          221 221 2970
        </Typography>
        <IconButton>
          <img
            style={{ width: "45px", height: "45px" }}
            src={Mail}
            alt="Mail Lusso"
            onClick={() =>
              (window.location.href = `mailto:contacto@lussohighmusic.com.mx?subject=${textSend} &body=${textSend}`)
            }
          />
        </IconButton>
        <Typography sx={{ mt: "1px", mb: "5px" }} variant="subtitle2">
          contacto@lussohighmusic.com.mx
        </Typography>
        <Grid container spacing={2} sx={{ px: "5rem", my: "1.5rem" }}>
          <Grid item xs={3} sx={{ justifyContent: "center" }}>
            <IconButton>
              <img
                style={{
                  width: isMobile ? "35px" : "45px",
                  height: isMobile ? "35px" : "45px",
                }}
                src={Facebook}
                alt="Facebook Lusso"
                onClick={() =>
                  window.open("https://www.facebook.com/lussohighmusic")
                }
              />
            </IconButton>
          </Grid>
          <Grid item xs={3} sx={{ justifyContent: "center" }}>
            <IconButton>
              <img
                style={{
                  width: isMobile ? "35px" : "45px",
                  height: isMobile ? "35px" : "45px",
                }}
                src={Instagram}
                alt="Instagram Lusso"
                onClick={() =>
                  window.open("https://www.instagram.com/lussohighmusic/")
                }
              />
            </IconButton>
          </Grid>
          <Grid item xs={3} sx={{ justifyContent: "center" }}>
            <IconButton>
              <img
                style={{
                  width: isMobile ? "35px" : "45px",
                  height: isMobile ? "35px" : "45px",
                }}
                src={TikTok}
                alt="Tiktok Lusso"
                onClick={() =>
                  window.open("https://www.tiktok.com/@lussohighmusic")
                }
              />
            </IconButton>
          </Grid>
          <Grid item xs={3} sx={{ justifyContent: "center" }}>
            <IconButton>
              <img
                style={{
                  width: isMobile ? "35px" : "45px",
                  height: isMobile ? "35px" : "45px",
                }}
                src={YouTube}
                alt="YouTube Lusso"
                onClick={() =>
                  window.open("http://www.youtube.com/@lussohighmusic")
                }
              />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          minHeight: "1rem",
          backgroundColor: "#4D4D4D",
          color: "#fefefe",
          textAlign: "center",
          py: "1rem",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              {`@ Todos los derechos reservados ${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
