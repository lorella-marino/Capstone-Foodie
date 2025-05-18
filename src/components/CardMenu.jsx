import { Card, Row, Col } from "react-bootstrap";

const CardMenu = ({ titolo, descrizione, immagine }) => {
  return (
    <Card className="mb-3">
      <Row className="g-0">
        <Col md={4}>
          <Card.Img
            src={immagine}
            alt={titolo}
            className="h-100 object-fit-cover"
            style={{ borderRadius: "0.25rem 0 0 0.25rem" }}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{titolo}</Card.Title>
            <Card.Text>{descrizione}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CardMenu;
