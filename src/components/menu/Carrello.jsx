import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";
import { inviaNota, removeFromCart, updateNote } from "../../redux/actions";

const Carrello = () => {
  const { items } = useSelector((state) => state.carrello);
  const dispatch = useDispatch();

  const handleInviaNota = (id, toppings, note) => {
    dispatch(inviaNota(id, toppings, note));
  };

  const handleNoteChange = (id, toppings, value) => {
    dispatch(updateNote(id, toppings, value));
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
                    {item.notaInviata && (
                      <p className="mb-1" style={{ fontSize: "0.9rem", fontWeight: "100" }}>
                        Nota: {item.notaInviata}
                      </p>
                    )}
                  </Col>
                  <Col xs={3} className="text-end ">
                    <Button onClick={() => handleRemove(item.id, item.toppings)}>
                      <BsFillTrash3Fill />
                    </Button>
                  </Col>
                </Row>
                <Row className="m-0">
                  <Col xs={9} className="p-0">
                    <Form.Control
                      id="form"
                      type="text"
                      placeholder="Note per questo prodotto..."
                      value={item.note}
                      onChange={(e) => handleNoteChange(item.id, item.toppings, e.target.value)}
                    />
                  </Col>
                  <Col xs={3} className="p-0 d-flex justify-content-end">
                    <Button className="buttoninvia" onClick={() => handleInviaNota(item.id, item.toppings, item.note)}>
                      Invia
                    </Button>
                  </Col>
                </Row>
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
