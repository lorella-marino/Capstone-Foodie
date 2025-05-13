import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-5">
        <div className="pattern2"></div>
      </div>
      <footer className="pt-3 pb-5" style={{ backgroundColor: "#839770" }}>
        <Container className="w-50 fs-6 m-auto pt-5 pb-3">
          <div className="mb-3">
            <BsFacebook className="me-2 text-light" size={20} />
            <BsInstagram className="me-2 text-light" size={20} />
            <BsTwitter className="me-2 text-light" size={20} />
            <BsYoutube className="me-2 text-light" size={20} />
          </div>
          <Row className="text-light text-start">
            <Col>
              <a href="/chi-siamo">Chi siamo</a>
              <a href="/menu">Menu</a>
              <a href="/contatti">Contatti</a>
            </Col>
            <Col>
              <a href="/locations" className="m-0">
                Locations
              </a>
              <small>Via Uno 18, Milano</small>
              <br />
              <small>Via Due 19, Roma</small>
              <br />
              <small>Via Tre 20, Palermo</small>
            </Col>
            <Col>
              <a href="/">Help Center</a>
              <a href="/">Privacy</a>
              <a href="/">Cookie Preferences</a>
            </Col>
          </Row>
          <p className="pfooter text-light pt-2 mb-0 fw-light">&copy; 2022-2025 Foodie, Inc.</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
