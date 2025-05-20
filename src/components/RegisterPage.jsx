import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";
import { register } from "../redux/actions";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    nome: "",
    cognome: "",
    telefono: "",
    indirizzo: "",
    email: "",
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const formElement = event.currentTarget;
    event.preventDefault();

    if (formElement.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const result = await dispatch(register(form));
      if (result.success) {
        navigate("/login");
      } else {
        alert("Registrazione fallita.");
      }
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
        id="form"
      >
        <Row className="w-25 justify-content-center">
          {["username", "password", "nome", "cognome", "telefono", "indirizzo", "email"].map((field) => (
            <Form.Group controlId={field} key={field}>
              <Form.Control
                type={field === "password" ? "password" : "text"}
                placeholder={field}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                required
              />{" "}
              <Form.Control.Feedback type="invalid">Inserisci il campo richiesto.</Form.Control.Feedback>
            </Form.Group>
          ))}
          <Button type="submit">Registrati</Button>
        </Row>
      </Form>
    </Container>
  );
}

export default RegisterPage;
