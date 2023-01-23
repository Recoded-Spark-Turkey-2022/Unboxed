const Title = ({ title, text }) => {
  return (
    <div data-testid="title" className="flex gap-2 flex-col">
      <div className="uppercase text-3xl font-poppins">{title}</div>
      <div className="text-lightBlack font-poppins text-xl">{text}</div>
    </div>
  );
};
export default Title;
