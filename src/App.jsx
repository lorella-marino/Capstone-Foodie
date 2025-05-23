import { Container, Navbar } from "react-bootstrap";
import "./index.css";
import FoodieNavbar from "./components/FoodieNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ChiSiamo from "./components/chisiamo/ChiSiamo";
import Locations from "./components/Locations";
import Contatti from "./components/Contatti";
import LoginPage from "./components/user/LoginPage";
import RegisterPage from "./components/user/RegisterPage";
import Menu from "./components/menu/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <FoodieNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrazione" element={<RegisterPage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
