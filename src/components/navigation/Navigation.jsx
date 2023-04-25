import { NavigationButtonMap } from "./NavgationButtonMap.jsx";
import { NavButton } from "./NavButton.jsx";
import "./navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Navigation = (props) => {
  const [hover, setHover] = useState(false);
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
          <ul className="desktop-nav">
            {NavigationButtonMap.map(({ NavText, href }, index) => {
              return <NavButton key={index} NavText={NavText} href={href} />;
            })}
          </ul>
          <div className="shoppingCartIcon">
            <FontAwesomeIcon size="1x" icon="fa-cart-shopping" />
          </div>
          <button
            className="mobile-button-nav"
            onClick={props.mobilenavShowFunction}
            aria-label={`Select button for opening mobile navigation menu`}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <FontAwesomeIcon icon={hover ? "fa-times" : "fa-bars"} />
          </button>
        </nav>
      </div>
    </section>
  );
};
