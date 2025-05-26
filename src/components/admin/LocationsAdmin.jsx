import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, deleteLocation, updateLocation } from "../../redux/actions";
import { Container, Form, Button, Row, Col, ListGroup, Table } from "react-bootstrap";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

const LocationsAdmin = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.list);

  const [form, setForm] = useState({ via: "", url: "", id: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updateLocation(form.id, form));
    } else {
      dispatch(addLocation(form));
    }
    setForm({ via: "", url: "", id: null });
  };

  const handleEdit = (loc) => setForm({ via: loc.via, url: loc.url, id: loc.id });
  const handleDelete = (id) => dispatch(deleteLocation(id));

  return (
    <Container className="px-0">
      <Form onSubmit={handleSubmit} className="mb-4 p-0" id="form">
        <Row>
          <Col md={4}>
            <Form.Group controlId="formVia">
              <Form.Control
                type="text"
                name="via"
                placeholder="Inserisci la via"
                value={form.via}
                onChange={(e) => setForm({ ...form, via: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group controlId="formUrl">
              <Form.Control
                type="text"
                name="url"
                placeholder="Inserisci l'URL"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Button type="submit" variant="primary" className="w-100">
              {form.id ? "Modifica" : "Aggiungi"}
            </Button>
          </Col>
        </Row>
      </Form>

      <Table id="put">
        <tbody>
          {locations.map((loc) => (
            <tr key={loc.id}>
              <td>
                <strong>{loc.via}</strong>
              </td>
              <td className="d-flex justify-content-end align-items-baseline">
                <Button size="sm" onClick={() => handleEdit(loc)} className="me-2">
                  <BsFillPencilFill />
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleDelete(loc.id)}
                  style={{ backgroundColor: "#426447", borderColor: "#426447" }}
                >
                  <BsFillTrash3Fill />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LocationsAdmin;
