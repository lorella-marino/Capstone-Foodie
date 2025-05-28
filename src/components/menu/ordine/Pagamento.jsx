import { Button, Form } from "react-bootstrap";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createPaymentIntent } from "../../../redux/reducers/paymentSlice";

const Pagamento = ({ totale, onSuccess }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const clientSecret = useSelector((state) => state.payment.clientSecret);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (totale > 0) {
      dispatch(createPaymentIntent(Math.round(totale * 100))); // Stripe vuole i centesimi
    }
  }, [dispatch, totale]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

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
        alert("Pagamento riuscito!");
        onSuccess();
      }
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nome titolare della carta</Form.Label>
        <Form.Control required type="text" placeholder="Nome Cognome" />

        <Form.Control.Feedback type="invalid">Inserisci il nome del titolare della carta.</Form.Control.Feedback>
      </Form.Group>
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
