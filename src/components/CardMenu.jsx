import { Card, Row, Col, Button } from "react-bootstrap";
import { useRef } from "react";

const CardMenu = ({ nome, descrizione, prezzo, calorie, immagine, topping }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 150;
    } else {
      current.scrollLeft += 150;
    }
  };

  return (
    <Card className="mb-3">
      <Row className="g-1">
        <Col md={3}>
          <Card.Img
            src={immagine}
            alt={nome}
            className="h-100  object-fit-cover"
            style={{ borderRadius: "0.25rem 0 0 0.25rem" }}
          />
        </Col>
        <Col md={9} className="my-2">
          <Card.Body>
            <Row>
              <Col xs={10}>
                <Card.Title className="fs-3 fw-semibold">{nome}</Card.Title>
                <Card.Text>{descrizione}</Card.Text>
                <Card.Text>{calorie} kcal</Card.Text>
              </Col>
              <Col xs={2} className="d-flex justify-content-end ">
                <Card.Text className="fs-3 fw-semibold">{prezzo} €</Card.Text>
              </Col>
            </Row>

            {topping?.length > 0 && (
              <div className="d-flex align-items-center mt-5">
                <Button variant="outline-secondary" size="sm" onClick={() => scroll("left")}>
                  ◀
                </Button>
                <div
                  ref={scrollRef}
                  className="flex-nowrap overflow-auto mx-2"
                  style={{ display: "flex", gap: "0.5rem", scrollbarWidth: "none" }}
                >
                  {topping.map((item, idx) => (
                    <Button key={idx} variant="outline-primary" className="flex-shrink-0">
                      {item.nome} ({item.prezzo} €)
                    </Button>
                  ))}
                </div>
                <Button variant="outline-secondary" size="sm" onClick={() => scroll("right")}>
                  ▶
                </Button>
              </div>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CardMenu;
