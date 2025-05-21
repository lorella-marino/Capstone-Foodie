import CardMenu from "./CardMenu";

const SezioneMenu = ({ nome, prodotti }) => {
  return (
    <div className="sezionemenu">
      <h2>{nome}</h2>
      <div className="menuitems">
        {prodotti.map((prodotto, index) => (
          <CardMenu
            key={index}
            nome={prodotto.nome}
            descrizione={prodotto.descrizione}
            immagine={prodotto.immagine}
            prezzo={prodotto.prezzo}
            calorie={prodotto.calorie}
            topping={prodotto.topping}
          />
        ))}
      </div>
    </div>
  );
};
export default SezioneMenu;
