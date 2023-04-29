import { Link } from "react-router-dom";
import "./sideMenuNavigation.scss";
import { NavigationButtonMap } from "../../navigation/NavgationButtonMap.jsx";

export const SideMenuNavigation = ({ showMenu }) => {
  return (
    <section
      className={`side-menu-navigation ${
        showMenu ? " closed-side-menu" : " open-side-menu-right"
      }`}
    >
      <div className="wrapper">
        <ul className="ul-normalize">
          {NavigationButtonMap.map(({ NavText, href }, index) => (
            <li key={index}>
              <Link to={href}>{NavText}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
