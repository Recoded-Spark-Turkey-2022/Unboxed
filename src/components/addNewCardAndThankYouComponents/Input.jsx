const Input = ({ type, placeholder, id, labelText, func }) => {
  return (
    <div className="text-Clr94AFB6 flex flex-col w-2/3">
      <label htmlFor={id} className="text-2xl ">
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="text-sm border border-Clr94AFB6 h-10 px-2"
        onChange={func}
      />
    </div>
  );
};
export default Input;
