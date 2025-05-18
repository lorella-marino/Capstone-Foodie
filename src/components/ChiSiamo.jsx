import { Container } from "react-bootstrap";
import SezioneChiSiamoDx from "./SezioneChiSiamoDx";
import SezioneChiSiamoSx from "./SezioneChiSiamoSx";

const ChiSiamo = () => {
  return (
    <Container id="chisiamo">
      <SezioneChiSiamoDx
        titolo="Chi siamo?"
        descrizione="Siamo FOODIE – IL BUONGUSTAIO DEL BIO , un food truck nato da un’idea semplice: rendere il cibo sano accessibile, veloce e incredibilmente buono. Per troppo tempo fast food ha significato solo pasti poco curati, pieni di ingredienti artificiali e poveri di qualità. Noi vogliamo cambiare le regole del gioco."
        immagine="src/assets/stoviglie.jpg"
      />

      <div className="pattern my-5"></div>

      <SezioneChiSiamoSx
        titolo="Il nostro concept"
        descrizione="Crediamo che mangiare bene non debba essere un compromesso. Che tu sia in pausa pranzo, di corsa tra un impegno e l’altro, o semplicemente con voglia di qualcosa di buono, con noi puoi contare su piatti preparati al momento con ingredienti 100% biologici, stagionali e scelti con attenzione. Sì, il fast food può essere anche fresco, genuino e consapevole."
        immagine="src/assets/Food_truck_owner_challenges.avif"
      />

      <div className="pattern my-5"></div>

      <SezioneChiSiamoDx
        titolo="Il nostro impegno"
        descrizione="Il nostro menù cambia con le stagioni, perché ci adattiamo a ciò che la terra offre. Collaboriamo con produttori locali per garantire qualità, sostenibilità e gusto. Niente surgelati, niente scorciatoie: solo ricette semplici, preparate con cura, che raccontano il nostro amore per il cibo autentico."
        immagine="src/assets/agricoltore.avif"
      />

      <div className="pattern my-5"></div>

      <SezioneChiSiamoSx
        titolo="La nostra filosofia"
        descrizione="Cibo veloce, ma con valori lenti. Perché ogni piatto può essere un piccolo gesto di cura verso sé stessi e
            verso il mondo. Foodie nasce per chi ama mangiare con gusto, senza rinunciare alla qualità. Per chi ha
            fretta, ma non si accontenta. Per chi crede che il futuro si costruisca anche con una forchetta in mano."
        immagine="src/assets/imagebowl.png"
      />
    </Container>
  );
};

export default ChiSiamo;
