import { Link, useLocation } from "react-router-dom";

export const NavButton = ({ NavText, href }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <li aria-label={`Select button for ${NavText}`}>
      {" "}
      <Link
        onClick={scrollTop}
        className={splitLocation[1] === href ? "active" : "not"}
        to={href}
      >
        {NavText}
      </Link>
    </li>
  );
};
