import { Container } from "react-bootstrap";
import "./index.css";
import FoodieNavbar from "./components/FoodieNavbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import ChiSiamo from "./components/chisiamo/ChiSiamo";
import Locations from "./components/Locations";
import Contatti from "./components/Contatti";
import Menu from "./components/menu/Menu";
import Footer from "./components/Footer";
import UserPanel from "./components/user/UserPanel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLocations } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch, token]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
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
