import { Modal } from "react-bootstrap";

const ModaleFinale = ({ show, onHide, tipoConsegna, orario }) => {
  return (
    <Modal id="modalefinale" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Grazie per averci scelto!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {tipoConsegna === "ritiro"
            ? `Puoi ritirare il tuo ordine alle ore ${orario}.`
            : `Il tuo ordine arriverà alle ore ${orario}.`}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ModaleFinale;
