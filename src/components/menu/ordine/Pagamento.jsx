import { Button, Form } from "react-bootstrap";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createPaymentIntent } from "../../../redux/reducers/paymentSlice";
import { inviaRiepilogoOrdine } from "../../../redux/actions";

const Pagamento = ({ totale, ordine }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const clientSecret = useSelector((state) => state.payment.clientSecret);
  const user = useSelector((state) => state.login);

  useEffect(() => {
    if (totale > 0) {
      dispatch(createPaymentIntent(Math.round(totale * 100))); // Stripe vuole i centesimi
    }
  }, [dispatch, totale]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        const emailOrdine = {
          nomeCliente: user.nome,
          emailCliente: user.email,
          tipoConsegna: ordine.tipoConsegna,
          indirizzo:
            ordine.tipoConsegna === "domicilio"
              ? `${ordine.indirizzo}, ${ordine.città || ""}, ${ordine.cap || ""}`.trim()
              : ordine.location,
          totale: totale,
          prodotti: ordine.carrello.map((p) => ({
            nome: p.nome,
            quantita: p.quantita,
            toppings: p.toppings.map((t) => t.nome),
            note: p.notaInviata || "",
          })),
        };

        console.log("Dati emailOrdine:", emailOrdine);
        dispatch(inviaRiepilogoOrdine(emailOrdine)).then((res) => {
          if (res.success) {
            alert("Email inviata con successo!");
          } else {
            alert("Pagamento effettuato, ma invio email fallito.");
          }
        });
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-3 border rounded p-2">
        <CardElement options={{ hidePostalCode: true }} />
      </div>
      <div className="d-flex justify-content-center">
        <Button id="buttonoconferma" type="submit" disabled={!stripe}>
          Paga ora
        </Button>
      </div>
    </Form>
  );
};

export default Pagamento;
