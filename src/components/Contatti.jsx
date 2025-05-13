import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { inviaRichiesta } from "../redux/actions";
import { Container, Row } from "react-bootstrap";

const Contatti = () => {
  const dispatch = useDispatch();
  const { loading, successo, errore } = useSelector((state) => state.richiesta);

  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inviaRichiesta(form));
    setForm({ nome: "", email: "", messaggio: "" }); // reset dopo l'invio
  };

  return (
    <form onSubmit={handleSubmit} id="formcontatti">
      <h2 className="text-center">Hai qualche domanda?</h2>
      <p className="text-center mb-4">Scrivici e ti risponderemo il prima possibile.</p>

      <Container className="d-flex flex-column align-items-center">
        <Row className=" w-50 justify-content-center">
          <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea
            name="messaggio"
            placeholder="Messaggio"
            value={form.messaggio}
            onChange={handleChange}
            rows={5}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Invio in corso..." : "Invia"}
          </button>
        </Row>
      </Container>
      {successo && <p className="text-success text-center mt-3">Messaggio inviato!</p>}
      {errore && <p className="text-danger text-center mt-3">{errore}</p>}
    </form>
  );
};

export default Contatti;
