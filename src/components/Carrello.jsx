import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { removeFromCart, updateNote } from "../redux/actions";
import { BsFillTrash3Fill } from "react-icons/bs";

const Carrello = () => {
  const { items } = useSelector((state) => state.carrello);
  const dispatch = useDispatch();

  const handleNoteChange = (id, value) => {
    dispatch(updateNote(id, value));
  };

  const handleRemove = (id, toppings) => {
    dispatch(removeFromCart(id, toppings));
  };

  const totale = items.reduce((somma, item) => somma + item.prezzo * item.quantità, 0);

  return (
    <div id="carrello">
      <h2>Carrello</h2>
      <div id="contenuto">
        {items.length === 0 ? (
          <p>Il tuo carrello è vuoto.</p>
        ) : (
          <>
            {items.map((item, id) => (
              <div key={id} className="mb-3">
                <Row id="prodotticarrello" className="g-0">
                  <Col xs={9}>
                    <strong>{item.nome}</strong>
                    {item.toppings?.length > 0 && (
                      <ul className="mb-1" style={{ listStyleType: "none", paddingLeft: 0 }}>
                        {item.toppings.map((topping, idx) => (
                          <li key={idx} style={{ fontSize: "0.9rem" }}>
                            + {topping.prezzo} € {topping.nome}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p>
                      x {item.quantità} = {(item.prezzo * item.quantità).toFixed(2)} €
                    </p>
                  </Col>
                  <Col xs={3} className="text-end ">
                    <Button onClick={() => handleRemove(item.id, item.toppings)}>
                      <BsFillTrash3Fill />
                    </Button>
                  </Col>
                </Row>
                <Form.Control
                  id="form"
                  type="text"
                  placeholder="Note per questo prodotto..."
                  value={item.note}
                  onChange={(e) => handleNoteChange(id, e.target.value)}
                />
              </div>
            ))}

            <h4 className="mt-3">Totale: {totale.toFixed(2)} €</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrello;
