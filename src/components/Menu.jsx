import { Col, Container, Row, Spinner } from "react-bootstrap";
import SezioneMenu from "./SezioneMenu";
import CardMenu from "./CardMenu";
import Carrello from "./Carrello";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMenu } from "../redux/actions";

const Menu = () => {
  const dispatch = useDispatch();
  const { prodotti, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const gruppiPerSezione = prodotti.reduce((acc, prodotto) => {
    const sezione = prodotto.sezione || "Altro";
    if (!acc[sezione]) acc[sezione] = [];
    acc[sezione].push(prodotto);
    return acc;
  }, {});

  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={9}>
          <div className="menu">
            {loading && <Spinner animation="border" />}
            {error && <p>{error}</p>}
            {Object.entries(gruppiPerSezione).map(([sezione, listaProdotti]) => (
              <SezioneMenu key={sezione} nome={sezione} prodotti={listaProdotti} />
            ))}
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <Carrello />
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
