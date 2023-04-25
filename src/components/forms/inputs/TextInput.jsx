const TextInput = (props) => {
  //Used For File Name, Build Name and Creator Name inputs//
  const handleUserInput = (e) => {
    props.setTextInput(`${e.target.value}`);
    e.preventDefault();
  };

  const callFunction = (e) => {
    if (e.key === "Enter") {
      props.callFunctionProps();
      e.preventDefault();
    }
  };

  return (
    <>
      {props.labelShow ? (
        <label htmlFor={`text-input-${props.labelText}`}>
          {props.labelText}
        </label>
      ) : null}
      <input
        aria-label={`text-input-${props.labelText}`}
        type={props.inputType}
        onChange={handleUserInput}
        className="textinput"
        placeholder={props.placeholderInput}
        onKeyDown={callFunction}
      />
    </>
  );
};

export default TextInput;
