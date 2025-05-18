import { Col, Container, Row } from "react-bootstrap";
import SezioneMenu from "./SezioneMenu";
import CardMenu from "./CardMenu";
import Carrello from "./Carrello";

const Menu = () => {
  const prodottiBowl = [
    {
      titolo: "Chicken Pesto Parm",
      descrizione: "couscous, pollo, pesto",
      immagine:
        "https://images.ctfassets.net/eum7w7yri3zr/5Kw3escovLNb8uWqQuzR7o/fb77087267c6de716f49d50ff755ede5/SG_Web_Image_Bowl_Chicken_Pesto_Parm.png?w=600&fm=avif&q=75",
    },
    {
      titolo: "Tofu Bowl",
      descrizione: "riso, tofu, avocado",
      immagine: "https://via.placeholder.com/300x200",
    },
  ];

  const prodottiBurger = [
    {
      titolo: "Smash Burger",
      descrizione: "manzo, cheddar, cipolle caramellate",
      immagine: "https://via.placeholder.com/300x200",
    },
  ];

  const prodottiBevande = [
    {
      titolo: "Tè Verde",
      descrizione: "senza zucchero",
      immagine: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={9}>
          <div className="menu">
            <SezioneMenu titolo="Bowl" prodotti={prodottiBowl} />
            <SezioneMenu titolo="Hamburger" prodotti={prodottiBurger} />
            <SezioneMenu titolo="Bevande" prodotti={prodottiBevande} />
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
