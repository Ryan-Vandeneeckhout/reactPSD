import { SiteHomeMain } from "./siteHomeMain/siteHomeMain.jsx";
import { AboutUsHomeMain } from "./aboutUsMain/aboutUsHomeMain.jsx";
import { OurProductsMain } from "./ourProductsMain/ourProductsMain.jsx";
import { NewsMain } from "./newsMain/newsMain.jsx";
import { GalleryPictures } from "./galleryPictures/galleryPictures.jsx";

export const Main = () => {
  return (
    <main>
      <SiteHomeMain />
      <AboutUsHomeMain />
      <OurProductsMain />
      <GalleryPictures />
      <NewsMain />
    </main>
  );
};
