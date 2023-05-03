import TextInput from "../forms/inputs/TextInput.jsx";
import { SiteHomeMainWrapper } from "../sectionWrappers/siteMainHomeWrapper.jsx";
import "./blog.scss";
import { blogMapItem } from "./blogMapItem.jsx";

export const Blog = () => {
  return (
    <main>
      <section className="bannerBackground">
        <h2>Blog</h2>
      </section>
      <SiteHomeMainWrapper wrapperSpecialClass="blog-section">
        <div className="content">
          <aside>
            <div className="side-image">
              <img
                alt="farm fresh"
                src="./assets/images/galleryPictures/gallery5.jpg"
              />
              <h3>About Farm Fresh</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                modi eligendi.
              </p>
            </div>
            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <ul className="ul-normalize">
                <li>Farm Fresh</li>
                <li>Pepper Pops</li>
                <li>Dirt or Super Power</li>
                <li>Ids of Vegetables</li>
              </ul>
            </div>
          </aside>
          <div className="content-blog">
            {blogMapItem.map(
              ({ h2title, dateCreated, Author, Content, posts }) => {
                return (
                  <>
                    <div className="blog">
                      <h2>{h2title}</h2>
                      <p className="italicsp">
                        {dateCreated} by{" "}
                        <span className="green-text">{Author}</span>
                      </p>
                      {Content.map((item, index) => {
                        return (
                          <p key={index} className="content-text-blog">
                            {item.pcontent}
                          </p>
                        );
                      })}
                    </div>
                    <ul className="posts ul-normalize ">
                      {posts.map((item, index) => {
                        return (
                          <li key={index} className="post-item">
                            <div
                              className="image-container"
                              style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="post-text-content">
                              <p className="green-text date-p">
                                Posted: {item.date}
                              </p>
                              <p>{item.pcontent}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="create-post">
                      <form>
                        <div className="upper-form">
                          <TextInput
                            placeholderInput="Email"
                            labelShow={false}
                          />
                          <TextInput
                            placeholderInput="Name"
                            labelShow={false}
                          />
                        </div>

                        <textarea />

                        <button>Post Comment</button>
                      </form>
                    </div>
                  </>
                );
              }
            )}
          </div>
        </div>
      </SiteHomeMainWrapper>
    </main>
  );
};
