import { Link } from "react-router-dom";

export const NavButton = (props) => {
  return (
    <li aria-label={`Select button for ${props.NavText}`}>
      {" "}
      <Link to={props.href}>{props.NavText}</Link>
    </li>
  );
};
