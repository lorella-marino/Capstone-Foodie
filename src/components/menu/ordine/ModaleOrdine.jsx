import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import ModaleFinale from "./ModaleFinale";
import { svuotaCarrello } from "../../../redux/actions";
import RecapOrdine from "./RecapOrdine";

const ModaleOrdine = ({ show, onHide, onConferma }) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location?.list || []);
  const items = useSelector((state) => state.carrello.items);

  const [tipoConsegna, setTipoConsegna] = useState(null);
  const [indirizzo, setIndirizzo] = useState("");
  const [locationScelta, setLocationScelta] = useState("");
  const [città, setCittà] = useState("");
  const [cap, setCap] = useState("");

  const [validatedTipoConsegna, setValidatedTipoConsegna] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);
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
    if (!tipoConsegna) {
      setValidatedTipoConsegna(true);
      return;
    }

    setValidatedForm(true);

    if (tipoConsegna === "domicilio") {
      if (!indirizzo.trim() || !città.trim() || !cap.trim()) {
        return;
      }
    }

    if (tipoConsegna === "ritiro" && !locationScelta) {
      return;
    }

    const nuovoOrdine = {
      tipoConsegna,
      indirizzo: tipoConsegna === "domicilio" ? indirizzo : null,
      città: tipoConsegna === "domicilio" ? città : null,
      cap: tipoConsegna === "domicilio" ? cap : null,
      location: tipoConsegna === "ritiro" ? locationScelta : null,
    };

    setOrdineConfermato(nuovoOrdine);
    setFasePagamento(true);
  };

  const handlePagamento = () => {
    onConferma?.(ordineConfermato);
    onHide();
    dispatch(svuotaCarrello());
    setShowFinale(true);

    // reset campi
    setFasePagamento(false);
    setTipoConsegna(null);
    setIndirizzo("");
    setCittà("");
    setCap("");
    setLocationScelta("");
    setValidatedTipoConsegna(false);
    setValidatedForm(false);
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
            <RecapOrdine ordine={ordineConfermato} items={items} totale={totaleCarrello} paga={handlePagamento} />
          ) : (
            <>
              <div id="consegna" className="d-flex justify-content-center gap-2 mb-3">
                <Button
                  variant={tipoConsegna === "ritiro" ? "primary" : "outline-primary"}
                  className="w-100"
                  onClick={() => {
                    setTipoConsegna("ritiro");
                    setValidatedTipoConsegna(false);
                  }}
                >
                  Ritiro presso il locale
                </Button>
                <Button
                  variant={tipoConsegna === "domicilio" ? "primary" : "outline-primary"}
                  className="w-100"
                  onClick={() => {
                    setTipoConsegna("domicilio");
                    setValidatedTipoConsegna(false);
                  }}
                >
                  A domicilio (+2 €)
                </Button>
              </div>

              {tipoConsegna === "ritiro" && (
                <Form.Group>
                  <Form.Select
                    isInvalid={validatedForm && !locationScelta}
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
                <>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo indirizzo"
                      className="mt-3"
                      value={indirizzo}
                      isInvalid={validatedForm && !indirizzo.trim()}
                      onChange={(e) => setIndirizzo(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Inserisci l'indirizzo per la consegna.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la tua città"
                      className="mt-3"
                      value={città}
                      isInvalid={validatedForm && !città.trim()}
                      onChange={(e) => setCittà(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Inserisci la città.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="CAP"
                      className="mt-3"
                      value={cap}
                      isInvalid={validatedForm && !cap.trim()}
                      onChange={(e) => setCap(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Inserisci il CAP.</Form.Control.Feedback>
                  </Form.Group>
                </>
              )}
            </>
          )}

          {validatedTipoConsegna && !tipoConsegna && (
            <div className="text-danger text-center mb-2">Seleziona un tipo di consegna per procedere.</div>
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
