import { Form, Button } from "react-bootstrap";

const Pagamento = ({ validated, handleSubmit }) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Numero carta</Form.Label>
        <Form.Control required type="text" placeholder="1234 5678 9012 3456" />
        <Form.Control.Feedback type="invalid">Inserisci il numero della carta</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Data scadenza</Form.Label>
        <Form.Control required type="text" placeholder="MM/AA" />
        <Form.Control.Feedback type="invalid">Inserisci la data di scadenza</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>CVV</Form.Label>
        <Form.Control required type="password" placeholder="123" />
        <Form.Control.Feedback type="invalid">Inserisci il CVV</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nome titolare della carta</Form.Label>
        <Form.Control required type="text" placeholder="Nome Cognome" />
        <Form.Control.Feedback type="invalid">Inserisci il nome del titolare</Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button id="buttonoconferma" type="submit">
          Paga ora
        </Button>
      </div>
    </Form>
  );
};

export default Pagamento;
