import { SiteHomeMainWrapper } from "../../sectionWrappers/siteMainHomeWrapper";
import { ContentText } from "../contentTextUpper/contentText";
import { OurProductMainItemMap } from "./ourProductMainItemMap";
import "./ourProductsMain.scss";
import { useState } from "react";

export const OurProductsMain = () => {
  const [sliceProduct, setSliceProduct] = useState(8);

  const loadMore = () => {
    setSliceProduct(16);
  };

  const renderButtonLoadMore = () => {
    if (sliceProduct === 16) {
      return null;
    } else {
      return (
        <button className="loadMoreButton" onClick={loadMore}>
          Load More
        </button>
      );
    }
  };

  return (
    <SiteHomeMainWrapper wrapperSpecialClass="our-products-section">
      <div className="content" id="shop-now">
        <ContentText headerText="Our Products" />

        <div className="gallery-content">
          {OurProductMainItemMap.slice(0, sliceProduct).map((item, index) => {
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
                  <div className="gallery-price-container">
                    <p className="gallery-price-sale">$370</p>
                    <p className="gallery-price-normal">$370</p>
                  </div>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
        {renderButtonLoadMore()}
      </div>
    </SiteHomeMainWrapper>
  );
};
