import { Link } from "react-router-dom";
import Carosello from "./Carosello";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiCart } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <Carosello />

      <Container className="p-0">
        <Row xs={1} md={1} lg={2} className="mt-1 px-2 g-4">
          <Col>
            <Button href="/chi-siamo" className="text-start buttonhome border border-0">
              <div>
                <p className="fw-semibold fs-5"> Chi siamo?</p>
                <p>
                  Siamo <strong>Foodie – il buongustaio del Bio</strong> , un food truck nato da un’idea semplice:
                  rendere il fast food sano, accessibile e incredibilmente buono. Vogliamo cambiare le regole del gioco.
                </p>
                <p className="opacity-50">Scopri di più...</p>
              </div>
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button id="ordina" href="/menu">
              Ordina online <BiCart />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
