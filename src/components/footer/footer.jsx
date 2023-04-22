import "./footer.scss";
import { Nav } from "./navBottom/nav";
import { RecentProducts } from "./navBottom/recentProducts/recentProducts";
import { SocialIcons } from "./navBottom/socialIcons/socialIcons";
import { Subsribe } from "./navBottom/subscribe/subscribe";

export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="content">
          <div className="column">
            <div className="imageContainer">
              <img
                src="./assets/images/navigation/logo.png"
                alt="company Logo"
                aria-label="company logo OREG"
              />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              aut expedita corrupti. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nihil aut expedita corrupti.
            </p>

            <SocialIcons />
          </div>
          <Nav />
          <RecentProducts />
          <Subsribe />
        </div>
      </div>
      <div className="credits">
        <p>Copyright &copy; 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
};
