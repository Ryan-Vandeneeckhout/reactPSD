const EditorTextArea = (props) => {
  //File Editor place text, editable and useable to rename commands//
  return (
    <textarea
      ref={props.TextAreaInputRef}
      onChange={(event) => {
        props.setMessage(event.target.value);
      }}
      value={props.messageState}
      placeholder={props.TextInputValue}
      required
    />
  );
};
export default EditorTextArea;
