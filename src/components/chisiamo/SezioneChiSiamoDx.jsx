import { Col, Row } from "react-bootstrap";

const SezioneChiSiamoDx = ({ titolo, descrizione, immagine }) => {
  return (
    <>
      <Row xs={1} md={2} className="mb-5">
        <Col className=" d-flex flex-column justify-content-center">
          <h2 className="align-self-start">{titolo}</h2>
          <p>{descrizione}</p>
        </Col>
        <Col className=" d-flex  flex-column  justify-content-center">
          <img src={immagine} alt="img" className="img-fluid" />
        </Col>
      </Row>
    </>
  );
};

export default SezioneChiSiamoDx;
