"src/assets/Food_truck_owner_challenges.avif";

import { Col, Container, Row } from "react-bootstrap";

const ChiSiamo = () => {
  return (
    <Container id="chisiamo">
      <Row xs={1} md={2} className="mb-5">
        <Col className=" d-flex flex-column justify-content-center">
          <h2 className="align-self-start">Chi siamo?</h2>
          <p>
            Siamo <strong>Foodie – il buongustaio del bio</strong> , un food truck nato da un’idea semplice: rendere il
            cibo sano accessibile, veloce e incredibilmente buono. Per troppo tempo fast food ha significato solo pasti
            poco curati, pieni di ingredienti artificiali e poveri di qualità. Noi vogliamo cambiare le regole del
            gioco.
          </p>
        </Col>
        <Col className=" d-flex  flex-column  justify-content-center">
          <img src="src/assets/stoviglie.jpg" alt="logo" className="img-fluid " />
        </Col>
      </Row>
      <div className="pattern"></div>

      <Row xs={1} md={2} className="my-5">
        <Col>
          <img src="src/assets/Food_truck_owner_challenges.avif" alt="Food Truck" className="img-fluid" />
        </Col>
        <Col className=" d-flex flex-column justify-content-center">
          <h2 className="align-self-start">Il nostro concept</h2>
          <p>
            Crediamo che mangiare bene non debba essere un compromesso. Che tu sia in pausa pranzo, di corsa tra un
            impegno e l’altro, o semplicemente con voglia di qualcosa di buono, con noi puoi contare su piatti preparati
            al momento con ingredienti 100% biologici, stagionali e scelti con attenzione. Sì, il fast food può essere
            anche fresco, genuino e consapevole.
          </p>
        </Col>
      </Row>
      <div className="pattern"></div>

      <Row xs={1} md={2} className="my-5">
        <Col className=" d-flex flex-column justify-content-center">
          <h2 className="align-self-start">Il nostro impegno</h2>
          <p>
            Il nostro menù cambia con le stagioni, perché ci adattiamo a ciò che la terra offre. Collaboriamo con
            produttori locali per garantire qualità, sostenibilità e gusto. Niente surgelati, niente scorciatoie: solo
            ricette semplici, preparate con cura, che raccontano il nostro amore per il cibo autentico.
          </p>
        </Col>
        <Col>
          <img src="src/assets/agricoltore.avif" alt="Food Truck" className="img-fluid" />
        </Col>
      </Row>
      <div className="pattern"></div>

      <Row xs={1} md={2} className="my-5">
        <Col>
          <img src="src/assets/imagebowl.png" alt="Food Truck" className="img-fluid" />
        </Col>
        <Col className=" d-flex flex-column justify-content-center">
          <h2 className="align-self-start">La nostra filosofia</h2>
          <p>
            Cibo veloce, ma con valori lenti. Perché ogni piatto può essere un piccolo gesto di cura verso sé stessi e
            verso il mondo. Foodie nasce per chi ama mangiare con gusto, senza rinunciare alla qualità. Per chi ha
            fretta, ma non si accontenta. Per chi crede che il futuro si costruisca anche con una forchetta in mano.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ChiSiamo;
