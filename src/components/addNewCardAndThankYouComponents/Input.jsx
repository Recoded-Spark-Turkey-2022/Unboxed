const Input = ({ type, placeholder, id, labelText, func, pattern, title }) => {
  return (
    <div className="text-Clr94AFB6 flex flex-col w-2/3 sm:w-full lg:w-4/5">
      <label htmlFor={id} className="text-xl ">
        {labelText}
      </label>
      <input
        data-testid="input"
        id={id}
        type={type}
        placeholder={placeholder}
        className="text-sm border border-Clr94AFB6 h-10 px-2"
        onChange={func}
        pattern={pattern}
        required
        title={title}
      />
    </div>
  );
};
export default Input;
