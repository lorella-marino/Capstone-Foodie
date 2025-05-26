import { useState } from "react";
import Pagamento from "./Pagamento";

const RecapOrdine = ({ ordine, items, totale, paga }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      paga();
    }
    setValidated(true);
  };

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

      <Pagamento validated={validated} handleSubmit={handleSubmit} />
    </>
  );
};

export default RecapOrdine;
