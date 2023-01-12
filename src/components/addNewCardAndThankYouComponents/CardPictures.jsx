import imgOne from './cardOne.svg';
import imgTwo from './cardTwo.svg';

const CardPictures = () => {
  return (
    <div
      data-testid="cardPictures"
      className="w-1/3 sm:w-full lg:flex lg:w-1/2 "
    >
      <img src={imgOne} alt="" />
      <img src={imgTwo} alt="" />
    </div>
  );
};
export default CardPictures;
