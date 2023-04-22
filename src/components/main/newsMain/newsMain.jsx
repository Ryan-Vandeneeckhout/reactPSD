import { SiteHomeMainWrapper } from "../../sectionWrappers/siteMainHomeWrapper";
import { ContentText } from "../contentTextUpper/contentText";
import "./newsMain.scss";
import { NewsMainItemMap } from "./newsMainItemMap";

export const NewsMain = () => {
  return (
    <SiteHomeMainWrapper wrapperSpecialClass="news-section">
      <div className="content">
        <ContentText headerText="Latest News" />
        <div className="gallery-news">
          {NewsMainItemMap.map((item, index) => {
            return (
              <div className="news-item" key={index}>
                <div className="image-container">
                  <img src={item.newsimage} alt="news item" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.preview}</p>
                <a
                  href="#shop-Now"
                  className="buttonAnchor"
                  aria-label="link to news article"
                >
                  Read More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </SiteHomeMainWrapper>
  );
};
