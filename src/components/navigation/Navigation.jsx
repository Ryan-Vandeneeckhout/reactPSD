import { NavigationButtonMap } from "./NavgationButtonMap.jsx";
import { NavButton } from "./NavButton.jsx";
import "./navigation.scss";

export const Navigation = (props) => {
  return (
    <section
      className={`site-main-home-wrapper nav-upper-section ${
        props.contentItemView
          ? "backgroundcolorFill"
          : "backgroundColorTransparent"
      }`}
    >
      <div className="wrapper">
        <div className="siteimage">
          <img
            src="./assets/images/navigation/logo.png"
            alt="company Logo"
            aria-label="company logo OREG"
          />
        </div>
        <nav>
          <ul>
            {NavigationButtonMap.map(({ NavText }, index) => {
              return <NavButton key={index} NavText={NavText} />;
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};
