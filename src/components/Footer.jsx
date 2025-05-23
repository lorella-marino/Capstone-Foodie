import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter, BsTwitterX, BsX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="mt-5">
        <div className="pattern2"></div>
      </div>
      <footer className=" py-5" style={{ backgroundColor: "#839770" }}>
        <Container className="w-50 fs-6 m-auto">
          <div className="mb-3">
            <BsFacebook className="me-2 text-light" size={20} />
            <BsInstagram className="me-2 text-light" size={20} />
            <BsTwitterX className="me-2 text-light" size={20} />
            <BsYoutube className="me-2 text-light" size={20} />
          </div>
          <Row xs={1} sm={2} md={3} className="text-light text-start mb-3">
            <Col className="text-start">
              <div style={{ width: "200px", margin: "0 auto" }}>
                <a href="/chi-siamo" className="d-block">
                  Chi siamo
                </a>
                <a href="/menu" className="d-block">
                  Menu
                </a>
                <a href="/contatti" className="d-block">
                  Contatti
                </a>
              </div>
            </Col>

            <Col className="text-start">
              <div style={{ width: "200px", margin: "0 auto" }}>
                <a href="/locations" className="d-block">
                  Locations
                </a>
                <small className="d-block">Via Uno 18, Milano</small>
                <small className="d-block">Via Due 19, Roma</small>
                <small className="d-block">Via Tre 20, Palermo</small>
              </div>
            </Col>

            <Col className="text-start">
              <div style={{ width: "200px", margin: "0 auto" }}>
                <a href="/" className="d-block">
                  Help Center
                </a>
                <a href="/" className="d-block">
                  Privacy
                </a>
                <a href="/" className="d-block">
                  Cookie Preferences
                </a>
              </div>
            </Col>
          </Row>

          <small className="pfooter text-light pt-2 mb-0 fw-light">&copy; 2022-2025 Foodie, Inc.</small>

          {/* <Row xs={1} sm={2} md={3} className="text-light text-start mb-3">
            <Col>
              <div className="col-inner">
                <a href="/chi-siamo">Chi siamo</a>

                <a href="/menu">Menu</a>

                <a href="/contatti">Contatti</a>
              </div>
            </Col>

            <Col>
              <div className="col-inner">
                <a href="/locations">Locations</a>
                <small>Via Uno 18, Milano</small>
                <br />
                <small>Via Due 19, Roma</small>
                <br />
                <small>Via Tre 20, Palermo</small>
                <br />
              </div>
            </Col>

            <Col>
              <div className="col-inner">
                <a href="/">Help Center</a>

                <a href="/">Privacy</a>

                <a href="/">Cookie Preferences</a>
              </div>
            </Col>
          </Row>
          <div className="text-center ">
            <div className="mb-3 me-3 d-inline">
              <BsFacebook className="me-2 text-light" size={20} />
              <BsInstagram className="me-2 text-light" size={20} />
              <BsTwitter className="me-2 text-light" size={20} />
              <BsYoutube className="me-2 text-light" size={20} />
            </div>
            <small className="pfooter text-light pt-2 mb-0 fw-light">&copy; 2022-2025 Foodie, Inc.</small>
          </div> */}
        </Container>
      </footer>
    </>
  );
};

export default Footer;
