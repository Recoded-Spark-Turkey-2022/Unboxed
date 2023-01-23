import Card from '../card/Card';

const Cards = ({ start, end, setSelected, selected, cards }) => {
  return (
    <button
      onClick={() => setSelected(!selected)}
      type="submit"
      className="flex gap-2"
    >
      {cards?.slice(start, end).map((item) => {
        return (
          <Card
            expiryDate={item?.expiryDate}
            cardNumber={item?.cardNumber}
            cardType={item?.cardType}
            nameOnCard={item?.nameOnCard}
          />
        );
      })}
    </button>
  );
};
export default Cards;
