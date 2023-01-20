import Card from '../card/Card';

const mycards = ['a', 'b'];
const Cards = mycards.map((item) => {
  return (
    <div>
      <Card />
      {item}
    </div>
  );
});
export default Cards;
