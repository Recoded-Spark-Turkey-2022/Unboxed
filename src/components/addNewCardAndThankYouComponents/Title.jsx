const Title = ({ title, text }) => {
  return (
    <div className="flex gap-2 flex-col">
      <div className="uppercase text-5xl font-poppins">{title}</div>
      <div className="text-lightBlack font-poppins text-2xl">{text}</div>
    </div>
  );
};
export default Title;
