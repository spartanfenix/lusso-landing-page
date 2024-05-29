import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Packets from "./components/pages/Packets";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";
import DrawerAppBar from "./components/DrawerAppBar/DrawerAppBar";
import Footer from "./components/Footer/Footer";

const AppRouter = () => {
  return (
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
  );
};

export default AppRouter;
