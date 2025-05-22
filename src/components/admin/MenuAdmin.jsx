import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProdotto, deleteProdotto, fetchMenu, updateProdotto } from "../../redux/actions";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

const MenuAdmin = () => {
  const dispatch = useDispatch();
  const { prodotti, loading, error } = useSelector((state) => state.menu);
  const [formData, setFormData] = useState({
    nome: "",
    descrizione: "",
    prezzo: "",
    calorie: "",
    sezioneMenu: "BOWLS",
  });
  const [editingId, setEditingId] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await dispatch(updateProdotto(editingId, formData, file));
    } else {
      await dispatch(addProdotto(formData, file));
    }

    setFormData({ nome: "", descrizione: "", prezzo: "", calorie: "", sezioneMenu: "BOWLS" });
    setEditingId(null);
    setFile(null);
  };

  const handleEdit = (prodotto) => {
    setFormData(prodotto);
    setEditingId(prodotto.id);
    setFile(null);
  };

  const handleDelete = (id) => dispatch(deleteProdotto(id));

  const fields = [
    { name: "nome", placeholder: "Nome", type: "text", md: 2 },
    { name: "descrizione", placeholder: "Descrizione", type: "text", md: 2 },
    { name: "prezzo", placeholder: "Prezzo", type: "number", md: 2 },
    { name: "calorie", placeholder: "Calorie", type: "number", md: 2 },
  ];

  return (
    <Container>
      <h2 className="my-3">{editingId ? "Modifica Prodotto" : "Aggiungi Prodotto"}</h2>
      <Form onSubmit={handleSubmit} className="mb-4 p-0" id="form">
        <Row>
          {fields.map(({ name, placeholder, type, md }) => (
            <Col md={md} key={name}>
              <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </Col>
          ))}
          <Col md={2}>
            <Form.Select name="sezioneMenu" value={formData.sezioneMenu} onChange={handleChange}>
              <option value="BOWLS">BOWLS</option>
              <option value="HAMBURGERS">HAMBURGERS</option>
              <option value="BEVANDE">BEVANDE</option>
            </Form.Select>
          </Col>

          <Col md={2}>
            <Form.Control type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="px-0 mx-0">
            {editingId ? "Salva modifiche" : "Aggiungi"}
          </Button>
        </div>
      </Form>

      {loading && <Spinner animation="border" />}
      {error && <p>{error}</p>}

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrizione</th>
            <th>Prezzo</th>
            <th>Calorie</th>
            <th>Sezione</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {prodotti.map((p) => (
            <tr key={p.id}>
              <td>{p.nome}</td>
              <td>{p.descrizione}</td>
              <td>{p.prezzo} €</td>
              <td>{p.calorie}</td>
              <td>{p.sezioneMenu}</td>
              <td id="put">
                <Button size="sm" className="my-1" onClick={() => handleEdit(p)}>
                  <BsFillPencilFill />
                </Button>{" "}
                <Button
                  size="sm"
                  className="my-1"
                  onClick={() => handleDelete(p.id)}
                  style={{ backgroundColor: "#426447" }}
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

export default MenuAdmin;
