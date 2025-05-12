import { Container, Navbar } from "react-bootstrap";
import "./index.css";
import FoodieNavbar from "./components/FoodieNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <FoodieNavbar />
      <Container className="mt-4">
        <Routes>{/* <Route path="/home" element={<FoodieNavbar />} /> */}</Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
