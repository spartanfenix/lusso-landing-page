import { Card, CardMedia, useMediaQuery } from "@mui/material";

import PacketEssentials from "../../assets/img/packEssentials.png";
import PacketGold from "../../assets/img/packGold.png";
import PacketPlatinum from "../../assets/img/packPlatinum.png";
import PacketSilver from "../../assets/img/packSilver.png";

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

  return (
    <Card sx={{ maxWidth: isMobile ? "240px" : isTablet ? "480px" : "440px" }}>
      <CardMedia
        component="img"
        image={packetsImages[packetType]}
        alt={`Paquete ${packetType}`}
      />
    </Card>
  );
};

export default CardPacket;
