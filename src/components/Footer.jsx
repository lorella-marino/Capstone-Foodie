import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const locations = useSelector((state) => state.location.list || []);

  return (
    <>
      <div className="mt-5">
        <div className="pattern2"></div>
      </div>
      <footer className=" py-5 text-light" style={{ backgroundColor: "#839770" }}>
        <Container>
          <Row className="text-center d-flex align-items-center ">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <img src="src/assets/iconabianca.png" alt="logo" style={{ width: "85px" }} />
            </Col>

            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="footer-link">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/chi-siamo" className="footer-link">
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link to="/contatti" className="footer-link">
                    Contatti
                  </Link>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={4}>
              <h5>Le nostre sedi</h5>
              <ul className="list-unstyled">
                {locations.length > 0 ? (
                  locations.map((loc) => (
                    <a key={loc.id} href={loc.url} className="d-bloc fw-light" style={{ fontSize: "0.8rem" }}>
                      {loc.via}
                    </a>
                  ))
                ) : (
                  <small>Nessuna location disponibile</small>
                )}
              </ul>
            </Col>
          </Row>
          <hr className="border-light" />
          <Row>
            <Col className="text-center">
              <small>© {new Date().getFullYear()} Foodie</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
