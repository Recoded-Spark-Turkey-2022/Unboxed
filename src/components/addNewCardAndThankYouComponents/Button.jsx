const Button = ({ text, func }) => {
  return (
    <div>
      <button
        className="uppercase rounded bg-LightBlue h-14 px-6 text-2xl"
        type="submit"
        onClick={func}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
