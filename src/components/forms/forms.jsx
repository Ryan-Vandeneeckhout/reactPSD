import EditorTextArea from "./inputs/EditorTextArea";
import TextInput from "./inputs/TextInput";

export const Forms = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="text-input-50-50">
        <TextInput inputType="name" placeholderInput="Your Full Name *" />
        <TextInput inputType="email" placeholderInput="Your Email Address *" />
      </div>
      <div className="text-input-50-50">
        <TextInput inputType="text" placeholderInput="Phone Number" />
        <TextInput inputType="url" placeholderInput="Your Website Link" />
      </div>
      <div className="text-input-100">
        <TextInput inputType="text" placeholderInput="Subject..." />
      </div>
      <EditorTextArea TextInputValue="Your Message..." />

      <button>{props.submitButtonText}</button>
    </form>
  );
};
