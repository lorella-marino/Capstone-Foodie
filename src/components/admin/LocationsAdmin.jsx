import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, deleteLocation, fetchLocations, updateLocation } from "../../redux/actions";
import { Container, Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

const LocationsAdmin = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.list);

  const [form, setForm] = useState({ via: "", url: "", id: null });

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch, locations.length]);

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
    <Container className="mt-1 px-0 ">
      <Form onSubmit={handleSubmit} className="mb-4" id="form">
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

      <ListGroup id="putlocation">
        {locations.map((loc) => (
          <ListGroup.Item key={loc.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{loc.via}</strong> –{" "}
              <a href={loc.url} target="_blank" rel="noopener noreferrer">
                {loc.url}
              </a>
            </div>
            <div>
              <Button size="sm" onClick={() => handleEdit(loc)} className="me-2">
                <BsFillPencilFill />
              </Button>
              <Button size="sm" onClick={() => handleDelete(loc.id)} style={{ backgroundColor: "#426447" }}>
                <BsFillTrash3Fill />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default LocationsAdmin;
