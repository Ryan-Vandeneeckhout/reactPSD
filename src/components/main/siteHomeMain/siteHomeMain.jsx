import { HashLink as Link } from "react-router-hash-link";
import { SiteHomeMainWrapper } from "../../sectionWrappers/siteMainHomeWrapper";
import "./siteHomeMain.scss";
import { useInView } from "react-intersection-observer";

export const SiteHomeMain = () => {
  const [contentItemView, contentItemInView] = useInView({
    triggerOnce: true,
  });

  return (
    <SiteHomeMainWrapper wrapperSpecialClass="opening-section">
      <div className="flex-row-column 50-100-container" ref={contentItemView}>
        <div
          className={`contentText ${
            contentItemInView ? " animationLeft" : " animationUP"
          }`}
        >
          <h1>Providing Tasty & Healthy Food</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel est
            omnis, tenetur atque facere, sunt sed delectus eum hic, veniam
            voluptas fuga illum facilis voluptatum saepe optio debitis
            blanditiis suscipit?
          </p>
          <Link
            to="#shop-now"
            className="buttonAnchor"
            smooth
            aria-label="link to oreg product list"
          >
            Shop Now
          </Link>
        </div>
        <div
          className={`imageContainer ${
            contentItemInView ? " animationLeft" : " animationZero2"
          }`}
        >
          <img
            src="./assets/images/header/header.webp"
            alt="plate of fruit/main background"
          />
        </div>
      </div>
    </SiteHomeMainWrapper>
  );
};
