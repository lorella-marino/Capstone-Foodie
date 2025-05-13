import { Link } from "react-router-dom";
import Carosello from "./Carosello";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Carosello />

      <Container className="p-0">
        <Row xs={1} md={2} className="mt-4 px-2">
          <Col>
            <Button
              onClick={() => (window.location.href = "/chi-siamo")}
              className="text-start buttonhome border border-0"
            >
              <div>
                <p className="fw-semibold fs-5"> Chi siamo?</p>
                <p>
                  Siamo <strong>Foodie – il buongustaio del Bio</strong> , un food truck nato da un’idea semplice:
                  rendere il fast food sano, accessibile e incredibilmente buono. Vogliamo cambiare le regole del gioco.
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
      </Container>
    </>
  );
};

export default Home;
