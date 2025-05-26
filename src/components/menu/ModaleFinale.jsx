import { Modal } from "react-bootstrap";

const ModaleFinale = ({ show, onHide, tipoConsegna }) => {
  return (
    <Modal id="modalefinale" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Grazie per averci scelto!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {tipoConsegna === "ritiro"
            ? "Puoi ritirare il tuo ordine tra 10/15 minuti."
            : "Il tuo ordine arriverà tra 15/20 minuti."}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ModaleFinale;
