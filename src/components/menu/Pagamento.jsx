import { Form, Button } from "react-bootstrap";

const Pagamento = ({ ordine, items, totale, paga }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.nome}</strong> x{item.quantità} - {(item.prezzo * item.quantità).toFixed(2)} €
            {item.toppings?.length > 0 && (
              <ul>
                {item.toppings.map((topping, idx) => (
                  <li key={idx} style={{ listStyleType: "none" }}>
                    + {topping.nome}
                  </li>
                ))}
              </ul>
            )}
            {item.notaInviata && <div>Note: {item.notaInviata}</div>}
          </li>
        ))}
      </ul>

      {ordine.tipoConsegna === "domicilio" && (
        <p>
          <strong>Consegna a domicilio:</strong> +2.00 €
        </p>
      )}

      <p>
        <strong>Totale:</strong> {totale.toFixed(2)} €
      </p>

      <hr />
      <h4 className="mb-3">Pagamento con carta</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Numero carta</Form.Label>
          <Form.Control type="text" placeholder="1234 5678 9012 3456" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data scadenza</Form.Label>
          <Form.Control type="text" placeholder="MM/AA" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="password" placeholder="123" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome titolare della carta</Form.Label>
          <Form.Control type="text" placeholder="Nome Cognome" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button id="buttonoconferma" onClick={paga}>
            Paga ora
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Pagamento;
