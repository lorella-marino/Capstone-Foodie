import CardMenu from "./CardMenu";

const SezioneMenu = ({ titolo, prodotti }) => {
  return (
    <div className="sezionemenu">
      <h2>{titolo}</h2>
      <div className="menuitems">
        {prodotti.map((prodotto, index) => (
          <CardMenu
            key={index}
            titolo={prodotto.titolo}
            descrizione={prodotto.descrizione}
            immagine={prodotto.immagine}
          />
        ))}
      </div>
    </div>
  );
};
export default SezioneMenu;
