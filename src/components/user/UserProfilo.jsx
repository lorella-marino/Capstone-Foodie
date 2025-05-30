import { useDispatch, useSelector } from "react-redux";
import { logout, updateProfile, deleteProfile } from "../../redux/actions";
import { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";

const UserProfilo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

  const [editMode, setEditMode] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    nome: user.nome,
    cognome: user.cognome,
    telefono: user.telefono,
    email: user.email,
    password: "",
  });

  const fields = [
    { name: "username", label: "Username", type: "text" },
    { name: "nome", label: "Nome", type: "text" },
    { name: "cognome", label: "Cognome", type: "text" },
    { name: "telefono", label: "Telefono", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password (obbligatoria per salvare)", type: "password" },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmitUpdate = async (event) => {
    const formElement = event.currentTarget;
    event.preventDefault();

    if (formElement.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (!formData.password) {
        alert("La password è obbligatoria per salvare le modifiche.");
        return;
      }
      const res = await dispatch(updateProfile(formData, user.token));
      if (res.success) {
        alert("Profilo aggiornato con successo");
        setEditMode(false);
        dispatch(logout());
      } else {
        alert("Errore aggiornamento: " + res.message);
      }
    }

    setValidated(true);
  };

  const handleDelete = async () => {
    const conferma = window.confirm("Sei sicuro di voler cancellare il tuo profilo?");
    if (conferma) {
      const res = await dispatch(deleteProfile(user.token));
      if (res.success) {
        alert("Profilo cancellato.");
      } else {
        alert("Errore cancellazione: " + res.message);
      }
    }
  };

  const handleLogout = () => dispatch(logout());

  return (
    <Container className="d-flex flex-column justify-content-between" style={{ minHeight: "80vh" }}>
      {!editMode ? (
        <>
          <div>
            <h4>Ciao {user.username}!</h4>
            <p>Benvenut* nel tuo profilo.</p>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mt-3">
            <Button id="buttonoconferma" onClick={() => setEditMode(true)}>
              Modifica o elimina utente <BsFillPencilFill className="ms-1" />
            </Button>
            <Button id="buttonannulla" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </>
      ) : (
        <Form noValidate validated={validated} onSubmit={handleSubmitUpdate}>
          <Row className="gap-3">
            {fields.map(({ name, label, type }) => (
              <Form.Group controlId={name} key={name}>
                <Form.Label className="mb-1">{label}</Form.Label>
                <Form.Control
                  type={type}
                  placeholder={label}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Inserisci il campo {label.toLowerCase()}.</Form.Control.Feedback>
              </Form.Group>
            ))}
          </Row>

          <Row className="d-flex flex-column gap-2 mt-4">
            <Col className="d-flex justify-content-between">
              <Button id="buttonoconferma" type="submit">
                Salva modifiche
              </Button>
              <Button id="buttonannulla" onClick={handleDelete}>
                Cancella profilo
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" style={{ borderRadius: "10px" }} onClick={() => setEditMode(false)}>
                Annulla
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Container>
  );
};

export default UserProfilo;
