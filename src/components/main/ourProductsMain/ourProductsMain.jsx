import { SiteHomeMainWrapper } from "../../sectionWrappers/siteMainHomeWrapper";
import { ContentText } from "../contentTextUpper/contentText";
import { OurProductMainItemMap } from "./ourProductMainItemMap";
import "./ourProductsMain.scss";

export const OurProductsMain = () => {
  return (
    <SiteHomeMainWrapper wrapperSpecialClass="our-products-section">
      <div className="content">
        <ContentText headerText="Our Products" />
        <div className="gallery-content">
          {OurProductMainItemMap.map((item, index) => {
            return (
              <div className="gallery-item" key={index}>
                <div className="imageContainer">
                  <img src={item.image} alt="plate of fruit/main background" />
                </div>
                <div className="bottomTextContainer">
                  <h4>Mix Vegetables</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo.
                  </p>
                  <p className="-gallery-price">$370</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SiteHomeMainWrapper>
  );
};
