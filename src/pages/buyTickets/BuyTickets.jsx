import CardsSlider from '../../components/cardsSlider/CardsSlider';

const BuyTickets = () => {
  return (
    <div className="font-poppins pt-16 pl-32 pr-32 w-full ">
      <div className="font-normal not-italic pl-16 mb-24">
        <p className=" text-5xl text-black  uppercase leading-[75px] ">
          select card
        </p>
        <p className=" text-2xl leading-9 text-justify text-lightBlack">
          Plesae select the card you want to buy the tickets with
        </p>
      </div>

      <CardsSlider />
      <div>
        Click confirm to use the selected card to purchase 5 tickets for 10$
      </div>
      <button
        className="tablet:h-16 tablet:w-52 w-26 h-8 self-center rounded-md bg-[#2DD3E3] hover:bg-[#3E64E9] hover:text-neutral-100 text-md px-2 tablet:text-2xl text-center tablet:leading-9 text-black "
        type="button"
      >
        confirm purchase
      </button>
    </div>
  );
};
export default BuyTickets;
