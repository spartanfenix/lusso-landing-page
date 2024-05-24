import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Packets from "./components/pages/Packets";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";
import DrawerAppBar from "./components/DrawerAppBar/DrawerAppBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packets" element={<Packets />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
