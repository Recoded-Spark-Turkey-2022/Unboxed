const Button = ({ text, func }) => {
  return (
    <div data-testid="buttons" className="lg:my-4">
      <button
        className="uppercase rounded bg-LightBlue h-14 px-6 text-xl"
        type="submit"
        onClick={func}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
