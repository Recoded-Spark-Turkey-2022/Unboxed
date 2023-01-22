import visa from './visa.svg';
import master from './master.svg';

const Card = ({ cardNumber, cardType, expiryDate, nameOnCard }) => {
  const closeCardNumber = `xxxx xxxx xxxx ${cardNumber.slice(-4)}`;
  const random = Math.floor(Math.random() * 3);
  return (
    <div
      className={
        // eslint-disable-next-line no-nested-ternary
        random === 0
          ? 'bg-pink-card w-80 h-56 text-white'
          : random === 1
          ? 'bg-blue-card w-80 h-56 text-white'
          : 'bg-yellow-card w-80 h-56 text-white'
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
    </div>
  );
};
export default Card;
