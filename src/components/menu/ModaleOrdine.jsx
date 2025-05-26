import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import Pagamento from "./Pagamento";
import ModaleFinale from "./ModaleFinale";
import { svuotaCarrello } from "../../redux/actions";

const ModaleOrdine = ({ show, onHide, onConferma }) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location?.list || []);
  const items = useSelector((state) => state.carrello.items);

  const [tipoConsegna, setTipoConsegna] = useState(null);
  const [indirizzo, setIndirizzo] = useState("");
  const [locationScelta, setLocationScelta] = useState("");

  const [validated, setValidated] = useState(false);
  const [fasePagamento, setFasePagamento] = useState(false);
  const [ordineConfermato, setOrdineConfermato] = useState(null);
  const [showFinale, setShowFinale] = useState(false);

  const calcolaTotale = () => {
    const subtotal = items.reduce((sum, item) => sum + item.prezzo * item.quantità, 0);
    const costoConsegna = tipoConsegna === "domicilio" ? 2 : 0;
    return subtotal + costoConsegna;
  };

  const totaleCarrello = calcolaTotale();

  const handleConferma = () => {
    setValidated(true);

    if (tipoConsegna === "domicilio" && !indirizzo.trim()) {
      return;
    }
    if (tipoConsegna === "ritiro" && !locationScelta) {
      return;
    }

    const nuovoOrdine = {
      tipoConsegna,
      indirizzo: tipoConsegna === "domicilio" ? indirizzo : null,
      location: tipoConsegna === "ritiro" ? locationScelta : null,
    };

    setOrdineConfermato(nuovoOrdine);
    setFasePagamento(true);
  };

  const handlePagamento = () => {
    onConferma?.(ordineConfermato);
    onHide(); // chiude il ModaleOrdine
    dispatch(svuotaCarrello());
    setShowFinale(true); // apre il ModaleFinale

    // reset campi
    setFasePagamento(false);
    setTipoConsegna(null);
    setIndirizzo("");
    setLocationScelta("");
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <div className="d-flex flex-column align-items-start">
            <Modal.Title>{fasePagamento ? "Riepilogo ordine" : "Scegli tipo di consegna"}</Modal.Title>
            {!fasePagamento && <p className="m-0">L'ordine solitamente è pronto entro 15 minuti</p>}
          </div>
        </Modal.Header>
        <Modal.Body>
          {fasePagamento ? (
            <Pagamento ordine={ordineConfermato} items={items} totale={totaleCarrello} paga={handlePagamento} />
          ) : (
            <>
              <div id="consegna" className="d-flex justify-content-center gap-2 mb-3">
                <Button variant={tipoConsegna === "ritiro"} className="w-100" onClick={() => setTipoConsegna("ritiro")}>
                  Ritiro presso il locale
                </Button>
                <Button
                  variant={tipoConsegna === "domicilio"}
                  className="w-100"
                  onClick={() => setTipoConsegna("domicilio")}
                >
                  A domicilio (+2 €)
                </Button>
              </div>

              {tipoConsegna === "ritiro" && (
                <Form.Group>
                  <Form.Select
                    isInvalid={validated && !locationScelta}
                    value={locationScelta}
                    onChange={(e) => setLocationScelta(e.target.value)}
                  >
                    <option value="">Seleziona una location</option>
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.via}>
                        {loc.via}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">Seleziona una location per il ritiro.</Form.Control.Feedback>
                </Form.Group>
              )}

              {tipoConsegna === "domicilio" && (
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il tuo indirizzo"
                    className="mt-3"
                    value={indirizzo}
                    isInvalid={validated && !indirizzo.trim()}
                    onChange={(e) => setIndirizzo(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Inserisci il tuo indirizzo per la consegna.
                  </Form.Control.Feedback>
                </Form.Group>
              )}
            </>
          )}
        </Modal.Body>
        {!fasePagamento && (
          <Modal.Footer>
            <Button id="buttonannulla" onClick={onHide}>
              Annulla
            </Button>
            <Button id="buttonoconferma" onClick={handleConferma}>
              Conferma
            </Button>
          </Modal.Footer>
        )}
      </Modal>
      <ModaleFinale
        show={showFinale}
        onHide={() => setShowFinale(false)}
        tipoConsegna={ordineConfermato?.tipoConsegna}
      />
    </>
  );
};

export default ModaleOrdine;
