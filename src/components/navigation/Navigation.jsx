import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationButtonMap } from "./NavgationButtonMap";
import { NavButton } from "./NavButton";
import "./navigation.scss";

export const Navigation = ({ contentItemView, mobilenavShowFunction }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <section
      className={`site-main-home-wrapper nav-upper-section ${
        contentItemView ? "backgroundcolorFill" : "backgroundColorTransparent"
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
            {NavigationButtonMap.map(({ NavText, href }, index) => (
              <NavButton key={index} NavText={NavText} href={href} />
            ))}
          </ul>
          <div className="shoppingCartIcon">
            <FontAwesomeIcon size="1x" icon="fa-cart-shopping" />
          </div>
          <button
            className="mobile-button-nav"
            onClick={mobilenavShowFunction}
            aria-label={`Select button for opening mobile navigation menu`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={hover ? "fa-times" : "fa-bars"} />
          </button>
        </nav>
      </div>
    </section>
  );
};
