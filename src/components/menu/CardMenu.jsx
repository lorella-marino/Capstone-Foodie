import { Card, Row, Col, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCarrello } from "../../redux/actions";
import { BiCart } from "react-icons/bi";

const CardMenu = ({ id, nome, descrizione, prezzo, calorie, immagine, topping }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 150;
    } else {
      current.scrollLeft += 150;
    }
  };

  const dispatch = useDispatch();

  const handleaddToCarrello = () => {
    dispatch(
      addToCarrello({
        id,
        nome,
        descrizione,
        prezzo,
        toppings: selectedToppings,
      })
    );
  };

  const [selectedToppings, setSelectedToppings] = useState([]);

  return (
    <Card className="mb-3">
      <Row className="g-1 r">
        <Col md={3}>
          <Card.Img src={immagine} alt={nome} className="h-100  object-fit-cover" />
        </Col>
        <Col md={9} className="my-2 align-content-center">
          <Card.Body>
            <Row>
              <Col xs={7}>
                <Card.Title className="fs-3 fw-semibold">{nome}</Card.Title>
                <Card.Text>{descrizione}</Card.Text>
                <Card.Text>{calorie} kcal</Card.Text>
              </Col>
              <Col xs={5} className="d-flex justify-content-end">
                <Card.Text className="fs-3 fw-semibold me-3">{prezzo} €</Card.Text>
                <div>
                  <Button id="aggiungi" onClick={handleaddToCarrello}>
                    <BiCart />
                  </Button>
                </div>
              </Col>
            </Row>

            {topping?.length > 0 && (
              <div className="d-flex align-items-center mt-3" id="topping">
                <BsFillCaretLeftFill className="buttonlr" onClick={() => scroll("left")}></BsFillCaretLeftFill>
                <div
                  ref={scrollRef}
                  className="flex-nowrap overflow-auto mx-2"
                  style={{ display: "flex", gap: "0.5rem", scrollbarWidth: "none" }}
                >
                  {topping.map((item, idx) => {
                    const isSelected = selectedToppings.some((top) => top.id === item.id);

                    return (
                      <Button
                        key={idx}
                        variant={isSelected ? "primary" : "outline-primary"}
                        className={`flex-shrink-0 ${isSelected ? "selected" : ""}`}
                        onClick={() => {
                          setSelectedToppings((prev) =>
                            isSelected ? prev.filter((top) => top.id !== item.id) : [...prev, item]
                          );
                        }}
                      >
                        {item.nome} ({item.prezzo} €)
                      </Button>
                    );
                  })}
                </div>
                <BsFillCaretRightFill className="buttonlr" onClick={() => scroll("right")}></BsFillCaretRightFill>
              </div>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CardMenu;
