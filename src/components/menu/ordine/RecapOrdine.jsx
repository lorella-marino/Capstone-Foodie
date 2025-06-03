import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Pagamento from "./Pagamento";

const stripePromise = loadStripe(
  "pk_test_51RT5kiPOfzVz5ifYZN6KGvhiXybdqnc2arZEIhncUHBv7fTCLitoYKSGV2L4ICvaspbAi71ARlbVOEmH6AseLoqx001Cwy3tAF"
); // Public Key

const RecapOrdine = ({ ordine, items, totale, onSuccess }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.nome}</strong> x{item.quantita} - {(item.prezzo * item.quantita).toFixed(2)} €
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
        <>
          <p>
            <strong>Indirizzo:</strong> {ordine.indirizzo}, {ordine.cap} {ordine.città}
          </p>
          <p>
            <strong>Consegna a domicilio:</strong> +2.00 €
          </p>
        </>
      )}

      {ordine.tipoConsegna === "ritiro" && ordine.location && (
        <p>
          <strong>Ritiro presso:</strong> {ordine.location}
        </p>
      )}

      {ordine.orario && (
        <p>
          <strong>Orario:</strong> {ordine.orario}
        </p>
      )}

      <p className="fs-5">
        <strong>Totale:</strong> {totale.toFixed(2)} €
      </p>

      <hr />
      <h4 className="mb-3">Pagamento con carta</h4>

      <Elements stripe={stripePromise}>
        <Pagamento totale={totale} ordine={ordine} items={items} onSuccess={onSuccess} />
      </Elements>
    </>
  );
};

export default RecapOrdine;
