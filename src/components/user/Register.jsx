import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Container, Row, Alert } from "react-bootstrap";
import { register } from "../../redux/actions";

function Register() {
  const dispatch = useDispatch();

  const initialState = {
    username: "",
    password: "",
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
  };

  const [form, setForm] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // nuovo stato per messaggio di successo

  const fields = [
    { name: "username", placeholder: "Username", type: "text" },
    { name: "password", placeholder: "Password", type: "password" },
    { name: "nome", placeholder: "Nome", type: "text" },
    { name: "cognome", placeholder: "Cognome", type: "text" },
    { name: "telefono", placeholder: "Telefono", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
  ];

  const handleSubmit = async (event) => {
    const formElement = event.currentTarget;
    event.preventDefault();

    if (formElement.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const result = await dispatch(register(form));
    if (result.success) {
      setForm(initialState);
      setValidated(false); // reset validazione
      setSuccessMessage("Registrazione completata!");
    } else {
      setSuccessMessage("Registrazione fallita.");
    }
  };

  return (
    <Container id="register">
      <p className="text-center mt-5">Non hai un account?</p>

      {successMessage && (
        <Alert
          variant={successMessage.includes("completata") ? "success" : "danger"}
          className="text-center py-2 mx-auto"
        >
          {successMessage}
        </Alert>
      )}

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
        id="form"
      >
        <Row className="justify-content-center">
          {fields.map(({ name, placeholder, type }) => (
            <Form.Group controlId={name} key={name}>
              <Form.Control
                type={type}
                placeholder={placeholder}
                value={form[name]}
                onChange={(e) => {
                  setForm({ ...form, [name]: e.target.value });
                  setSuccessMessage("");
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Inserisci il campo {placeholder.toLowerCase()}.
              </Form.Control.Feedback>
            </Form.Group>
          ))}
          <Button type="submit" className="mt-3">
            Registrati
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
