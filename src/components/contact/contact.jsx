import { Forms } from "../forms/forms";
import { SiteHomeMainWrapper } from "../sectionWrappers/siteMainHomeWrapper";
import "./contact.scss";
import { ContactIDsItemMap } from "./contactIDsItemMap";

export const Contact = () => {
  return (
    <main>
      <section className="banner">
        <h2>Contact Us</h2>
      </section>
      <SiteHomeMainWrapper wrapperSpecialClass="contact-us-section">
        <div className="content">
          <ul className="ul-normalize">
            {ContactIDsItemMap.map((item, index) => {
              return (
                <li className="addressContact" key={index}>
                  <p className="boldp">{item.id}</p>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
          <section className="forms">
            <Forms submitButtonText="Send Message" />
          </section>
        </div>
      </SiteHomeMainWrapper>
    </main>
  );
};
