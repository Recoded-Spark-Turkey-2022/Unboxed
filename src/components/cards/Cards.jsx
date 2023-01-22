import { useSelector } from 'react-redux';
import Card from '../card/Card';

const Cards = ({ start, end, setSelected, selected }) => {
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;

  return (
    <button onClick={() => setSelected(!selected)} type="submit">
      {firestoreObject?.cards?.slice(start, end).map((item) => {
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
