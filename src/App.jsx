import { Container, Navbar } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container className="mt-4">
        <Routes>
          <Route />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
