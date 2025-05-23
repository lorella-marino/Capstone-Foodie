import { Col, Container, Row, Spinner } from "react-bootstrap";
import SezioneMenu from "./SezioneMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMenu } from "../../redux/actions";
import MenuAdmin from "../admin/MenuAdmin";
import { isAdmin } from "../../utils/getUserRoles";
import Carrello from "./Carrello";

const Menu = () => {
  const dispatch = useDispatch();
  const { prodotti, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const gruppiPerSezione = prodotti.reduce((acc, prodotto) => {
    const sezione = prodotto.sezioneMenu;
    if (!acc[sezione]) acc[sezione] = [];
    acc[sezione].push(prodotto);
    return acc;
  }, {});

  const SEZIONI = ["BOWLS", "HAMBURGERS", "BEVANDE"];

  return (
    <Container fluid>
      {isAdmin() ? (
        <MenuAdmin />
      ) : (
        <Row>
          <Col xs={12} lg={9}>
            <div className="menu">
              {loading && <Spinner animation="border" />}
              {error && <p>{error}</p>}
              {SEZIONI.map((sezione) =>
                gruppiPerSezione[sezione] ? (
                  <SezioneMenu key={sezione} sezione={sezione} prodotti={gruppiPerSezione[sezione]} />
                ) : (
                  <div key={sezione}>
                    <h2>{sezione}</h2>
                    <p>Nessun prodotto in questa sezione</p>
                  </div>
                )
              )}
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <Carrello />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Menu;
