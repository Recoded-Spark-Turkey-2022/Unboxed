/* eslint-disable no-nested-ternary */

import visa from './visa.svg';
import master from './master.svg';

const Card = ({
  cardNumber,
  cardType,
  expiryDate,
  nameOnCard,
  setSelected,
  selected,
}) => {
  const closeCardNumber = `xxxx xxxx xxxx ${cardNumber.slice(-4)}`;

  return (
    <button
      onClick={() => setSelected(!selected)}
      type="button"
      className={
        cardType === 'Visa'
          ? 'bg-pink-card w-80 h-56 text-white lg:w-72'
          : 'bg-yellow-card w-80 h-56 text-white lg:w-72'
      }
    >
      <img
        className="mr-7 pt-6 ml-auto"
        src={cardType === 'Visa' ? visa : master}
        alt="cardType"
      />

      <section className="pl-8 pt-4 flex flex-col gap-5 items-start">
        <div>{expiryDate}</div>
        <div>{closeCardNumber}</div>
        <div>{nameOnCard}</div>
      </section>
    </button>
  );
};
export default Card;
