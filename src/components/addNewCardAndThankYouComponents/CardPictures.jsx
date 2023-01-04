import imgOne from './cardOne.svg';
import imgTwo from './cardTwo.svg';

const CardPictures = () => {
  return (
    <div className="w-1/3">
      <img src={imgOne} alt="" />
      <img src={imgTwo} alt="" />
    </div>
  );
};
export default CardPictures;
