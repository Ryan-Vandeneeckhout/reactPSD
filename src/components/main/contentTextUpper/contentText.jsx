import "./contentText.scss";

export const ContentText = (props) => {
  return (
    <div className="contentText">
      <h2>{props.headerText}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel est omnis,
        tenetur atque facere, sunt sed delectus eum hic.
      </p>
    </div>
  );
};
