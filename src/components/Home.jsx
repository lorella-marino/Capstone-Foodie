import { Link } from "react-router-dom";
import Carosello from "./Carosello";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Carosello />
      <Row xs={1} md={2} className="mt-4 px-2">
        <Col>
          <Button
            onClick={() => (window.location.href = "/chi-siamo")}
            className="text-start buttonhome border border-0"
          >
            <div>
              <p className="fw-semibold fs-5"> Chi siamo?</p>
              <p className="fw-light">
                Siamo un team di appassionati di cibo che ha deciso di portare la freschezza e la qualità anche nello{" "}
                <span className="fw-semibold">street food</span>. Con ingredienti selezionati e ricette innovative, il
                nostro obiettivo è offrirti un'esperienza culinaria unica.
              </p>
              <Link to="/chi-siamo" className="text-decoration-none link-light opacity-50">
                Scopri di più...
              </Link>
            </div>
          </Button>
        </Col>
        <Col>
          <Button variant="success">Location</Button>
        </Col>
      </Row>
    </>
  );
};

export default Home;
