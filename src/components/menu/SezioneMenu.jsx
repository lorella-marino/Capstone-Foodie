import CardMenu from "./CardMenu";

const SezioneMenu = ({ prodotti }) => {
  if (prodotti.length === 0) return null;

  const nomeSezione = prodotti[0].sezioneMenu; // prende la sezione dal primo prodotto

  return (
    <div className="sezionemenu mb-5">
      <h2>{nomeSezione}</h2>
      <div className="menuitems">
        {prodotti.map((prodotto, index) => (
          <CardMenu
            key={index}
            id={prodotto.id}
            nome={prodotto.nome}
            descrizione={prodotto.descrizione}
            immagine={prodotto.immagine}
            prezzo={prodotto.prezzo}
            calorie={prodotto.calorie}
            topping={nomeSezione === "BEVANDE" ? [] : prodotto.topping} // se BEVANDE, passa array vuoto
          />
        ))}
      </div>
    </div>
  );
};

export default SezioneMenu;
