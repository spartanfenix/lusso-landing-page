import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Packets from "./components/pages/Packets";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";
import DrawerAppBar from "./components/DrawerAppBar/DrawerAppBar";
import Footer from "./components/Footer/Footer";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import theme from "./theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packets" element={<Packets />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;
