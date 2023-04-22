import { SiteHomeMainWrapper } from "../../sectionWrappers/siteMainHomeWrapper";
import { ContentText } from "../contentTextUpper/contentText";
import { GalleryPicturesItemMap } from "./galleryPicturesItemMap";
import "./galleryPictures.scss";

export const GalleryPictures = () => {
  return (
    <SiteHomeMainWrapper wrapperSpecialClass="gallery-section">
      <div className="content">
        <ContentText headerText="Our Gallery" />
        <div className="gallery-pictures">
          {GalleryPicturesItemMap.map((item, index) => {
            return (
              <div
                className={`image-container ${item.class}`}
                style={{ backgroundImage: `url(${item.image})` }}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    </SiteHomeMainWrapper>
  );
};
