import { Container } from "react-bootstrap";
import "./index.css";
import FoodieNavbar from "./components/FoodieNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ChiSiamo from "./components/chisiamo/ChiSiamo";
import Locations from "./components/Locations";
import Contatti from "./components/Contatti";
import Menu from "./components/menu/Menu";
import Footer from "./components/Footer";
import UserPanel from "./components/user/UserPanel";

function App() {
  return (
    <BrowserRouter>
      <FoodieNavbar />
      <UserPanel />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
