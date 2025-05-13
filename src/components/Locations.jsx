import { Col, Row } from "react-bootstrap";

const Locations = () => {
  return (
    <Row id="locations">
      <Col>
        <h2>Locations</h2>
        <p>Scopri dove puoi trovare il nostro food truck e gustare i nostri piatti deliziosi!</p>
        <a href="https://maps.app.goo.gl/xgEj44bZKfWrPoyu5" className="d-block text-black">
          Via Uno 18, Milano
        </a>
        <a href="https://maps.app.goo.gl/xgEj44bZKfWrPoyu5" className="d-block text-black">
          Via Due 19, Roma
        </a>
        <a href="https://maps.app.goo.gl/xgEj44bZKfWrPoyu5" className="d-block text-black">
          Via Tre 20, Palermo
        </a>
      </Col>
      <Col className=" d-flex  flex-column  justify-content-center">
        <div style={{ backgroundColor: "#faf6f0", borderRadius: "20px", padding: "20px" }} className="text-center">
          <img src="src/assets/italia.png" alt="logo" className="img-fluid rounded w-75 " />
        </div>
      </Col>
    </Row>
  );
};

export default Locations;
