const mycards = [];
const Cards = mycards.map((item) => {
  return (
    <div key={item.id}>
      <button className="mx-1" type="button">
        <img src={item.image} alt={item.title} />
      </button>
    </div>
  );
});
export default Cards;
