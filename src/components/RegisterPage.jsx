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
    email: "",
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const formElement = event.currentTarget;
    event.preventDefault();

    if (formElement.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch(register(form));
      navigate("/login");
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
          {["Username", "Password", "Nome", "Cognome", "Telefono", "Email"].map((field) => (
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
