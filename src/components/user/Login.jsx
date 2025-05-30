import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { login } from "../../redux/actions";

function Login({ onClickRegister }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ username: "", password: "" });
  const [errore, setErrore] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    if (!formElement.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setErrore(false);

    const result = await dispatch(login(form));
    if (!result?.success) {
      setErrore(true);
    }
  };

  return (
    <Container id="login">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center text-center"
        id="form"
      >
        <Row className="flex-column justify-content-center align-items-center">
          <Form.Group controlId="validationUsername">
            <Form.Control
              required
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">Inserisci il tuo nome.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationPassword">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">Inserisci la tua password.</Form.Control.Feedback>
          </Form.Group>

          {errore && <p className="text-danger mt-2">Credenziali non valide</p>}

          <Button type="submit" className="d-block mt-2">
            Login
          </Button>

          <p className="mt-4 mb-1">Non hai un account?</p>
          <Button onClick={onClickRegister}>Registrati</Button>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
