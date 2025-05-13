import { Container, Navbar } from "react-bootstrap";
import "./index.css";
import FoodieNavbar from "./components/FoodieNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ChiSiamo from "./components/ChiSiamo";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <FoodieNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
