import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";
import { inviaNota, removeFromCarrello, updateNote } from "../../redux/actions";
import { useEffect, useState } from "react";
import { isLogged } from "../../utils/getUserRoles";
import ModaleOrdine from "./ordine/ModaleOrdine";

const Carrello = ({ apriUserPanel }) => {
  const { items } = useSelector((state) => state.carrello);
  const dispatch = useDispatch();

  const handleInviaNota = (id, toppings, note) => {
    dispatch(inviaNota(id, toppings, note));
  };

  const handleNoteChange = (id, toppings, value) => {
    dispatch(updateNote(id, toppings, value));
  };

  const handleRemove = (id, toppings) => {
    dispatch(removeFromCarrello(id, toppings));
  };

  const totale = items.reduce((somma, item) => somma + item.prezzo * item.quantita, 0);

  const [showModal, setShowModal] = useState(false);

  const handleProseguiOrdine = () => {
    if (!isLogged()) {
      localStorage.setItem("redirectAfterLogin", "/menu");
      localStorage.setItem("apriModaleDopoLogin", "true");
      apriUserPanel();
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    const apriModale = localStorage.getItem("apriModaleDopoLogin");
    if (apriModale === "true" && isLogged()) {
      setShowModal(true);
      localStorage.removeItem("apriModaleDopoLogin"); // rimuove per evitare aperture future
    }
  }, []);

  const [ordineConfermato, setOrdineConfermato] = useState(null);
  const [fasePagamento, setFasePagamento] = useState(false);

  const handleConfermaOrdine = (datiOrdine) => {
    setOrdineConfermato(datiOrdine);
    setFasePagamento(true);
  };

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
                            + {topping.nome} ( {topping.prezzo} €)
                          </li>
                        ))}
                      </ul>
                    )}
                    <p>
                      x {item.quantita} = {(item.prezzo * item.quantita).toFixed(2)} €
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

            <h4 className="mt-4">Totale: {totale.toFixed(2)} €</h4>
            <Button className="mt-1 w-100 fs-5" onClick={handleProseguiOrdine}>
              Prosegui con l'ordine
            </Button>
          </>
        )}
      </div>
      <ModaleOrdine
        show={showModal}
        onHide={() => setShowModal(false)}
        onConferma={handleConfermaOrdine}
        items={items}
        totale={totale}
        fasePagamento={fasePagamento}
        ordineConfermato={ordineConfermato}
      />
    </div>
  );
};

export default Carrello;
