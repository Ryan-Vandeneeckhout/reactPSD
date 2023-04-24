import { SiteHomeMainWrapper } from "../sectionWrappers/siteMainHomeWrapper";
import "./contact.scss";

export const Contact = () => {
  return (
    <main>
      <section className="banner">
        <h2>Contact Us</h2>
      </section>
      <SiteHomeMainWrapper wrapperSpecialClass="about-us-section">
        <div className="content">
          <div className="addressContact">
            <div className="addressItem">
              <p className="boldp"></p>
            </div>
          </div>
          <section>
            <form>
              <button>Send Message</button>
            </form>
          </section>
        </div>
      </SiteHomeMainWrapper>
    </main>
  );
};
