import { SiteHomeMainWrapper } from "../../sectionWrappers/siteMainHomeWrapper";
import "./aboutUsHomeMain.scss";
import { useInView } from "react-intersection-observer";

export const AboutUsHomeMain = () => {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.1,
  });
  return (
    <SiteHomeMainWrapper wrapperSpecialClass="about-us-section">
      <div ref={contentItemView} className="content">
        <div
          className={`textContent ${
            contentItemInView ? " animationLeft" : " animationZero2"
          }`}
        >
          <h4>About Us</h4>
          <h2>Providing the Best Organic Products</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            reiciendis molestias. Repellendus vero tenetur eius provident
            perspiciatis. Repellendus, praesentium beatae corporis obcaecati
            maxime at culpa quibusdam iure ducimus laboriosam incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            laborum molestiae neque in perferendis autem? Est dicta at illum
            neque iusto accusantium architecto deleniti, reprehenderit, numquam
            esse, voluptates vitae tempore.
          </p>
          <a
            href="#shop-Now"
            className="buttonAnchor"
            aria-label="link to oreg product list"
          >
            Shop Now
          </a>
        </div>
        <div
          className={`text-box ${
            contentItemInView ? " animationLeft" : " animationZero"
          }`}
        >
          <h3>
            We've been providing the best selection for organic products for 20
            Years.
          </h3>
        </div>
      </div>
    </SiteHomeMainWrapper>
  );
};
