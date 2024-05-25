// import * as React from "react";
import {
  Card,
//   CardActions,
//   CardContent,
  CardMedia,
//   Collapse,
//   IconButton,
//   IconButtonProps,
//   Typography,
  useMediaQuery,
} from "@mui/material";
// import { styled } from "@mui/material/styles";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PacketEssentials from "../../assets/img/packEssentials.png";
import PacketGold from "../../assets/img/packGold.png";
import PacketPlatinum from "../../assets/img/packPlatinum.png";
import PacketSilver from "../../assets/img/packSilver.png";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

interface CardPacketProps {
  packetType: "essentials" | "gold" | "silver" | "platinum";
}

const packetsImages = {
  essentials: PacketEssentials,
  gold: PacketGold,
  silver: PacketSilver,
  platinum: PacketPlatinum,
};

const CardPacket = ({ packetType }: CardPacketProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1365px)");
  //   const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <Card sx={{ maxWidth: isMobile ? "180px" : isTablet ? "480px" : "240px" }}>
      <CardMedia
        sx={{
          width: isMobile ? "180px" : isTablet ? "480px" : "240px",
          height: isMobile ? "126px" : isTablet ? "336px" : "168px",
        }}
        component="img"
        image={packetsImages[packetType]}
        alt="Paquete"
      />
      {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Pack {packetType.charAt(0).toUpperCase() + packetType.slice(1)}
          </Typography>
          <Typography paragraph>
            Informacion sobre pack {packetType}{" "}
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

export default CardPacket;
