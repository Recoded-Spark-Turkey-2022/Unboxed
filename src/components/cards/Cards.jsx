/* eslint-disable no-unused-vars */
import Card from '../card/Card';

const Cards = ({ start, end, setSelected, selected, cards }) => {
  return (
    <div className="flex gap-2 sm:flex-col lg:items-center justify-center">
      {cards?.slice(start, end).map((item, index) => {
        return (
          <Card
            expiryDate={item?.expiryDate}
            cardNumber={item?.cardNumber}
            cardType={item?.cardType}
            nameOnCard={item?.nameOnCard}
            selected={selected}
            setSelected={setSelected}
            index={index}
          />
        );
      })}
    </div>
  );
};
export default Cards;
