import { Link } from "react-router-dom";
import { NavItemMap } from "./navItemMap";
import "./nav.scss";

export const Nav = () => {
  return (
    <nav className="column">
      <h3>Quick Links</h3>
      <ul className="ul-normalize column-ul quick-links-nav">
        {NavItemMap.map((item, index) => {
          return (
            <li className="icon" key={index}>
              <Link aria-label={item.ariaLabel} to={item.href}>
                {item.NavText}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
