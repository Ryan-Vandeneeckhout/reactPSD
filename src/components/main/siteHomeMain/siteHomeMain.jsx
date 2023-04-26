import { SiteHomeMainWrapper } from "../../sectionWrappers/siteMainHomeWrapper";
import "./siteHomeMain.scss";

export const SiteHomeMain = () => {
  return (
    <SiteHomeMainWrapper wrapperSpecialClass="opening-section">
      <div className="flex-row-column 50-100-container">
        <div className="contentText">
          <h1>Providing Tasty & Healthy Food</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel est
            omnis, tenetur atque facere, sunt sed delectus eum hic, veniam
            voluptas fuga illum facilis voluptatum saepe optio debitis
            blanditiis suscipit?
          </p>
          <a
            href="#shop-Now"
            className="buttonAnchor"
            aria-label="link to oreg product list"
          >
            Shop Now
          </a>
        </div>
        <div className="imageContainer">
          <img
            src="./assets/images/header/header.webp"
            alt="plate of fruit/main background"
          />
        </div>
      </div>
    </SiteHomeMainWrapper>
  );
};
