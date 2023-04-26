import { SiteHomeMainWrapper } from "../sectionWrappers/siteMainHomeWrapper.jsx";
import "./blog.scss";

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
              <img alt="farm fresh" />
              <h3>About Farm Fresh</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                modi eligendi.
              </p>
            </div>
            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <ul>
                <li>Farm Fresh</li>
                <li>Pepper Pops</li>
                <li>Dirt or Super Power</li>
                <li>Ids of Vegetables</li>
              </ul>
            </div>
          </aside>
          <div className="textContent">
            <div className="blog">
              <h2>Why I became a Blogger</h2>
              <p>Monday April 24, 2023 by Farm Fresh</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                voluptatem laudantium repellendus, alias voluptatibus a ipsum
                rem praesentium sapiente, dignissimos assumenda harum non
                voluptas dolores tempore repellat exercitationem nam. Esse!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium nobis nemo cumque provident quos minus molestiae
                officia modi reiciendis praesentium quas optio sunt laborum
                iure, quo fugit quibusdam, tempora sed.
              </p>
            </div>
            <div className="posts">
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum hic consequatur illum ipsa repellendus consectetur
                    reiciendis, mollitia, itaque voluptate quae sapiente iste
                    omnis incidunt qui reprehenderit voluptatibus quidem, natus
                    porro.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SiteHomeMainWrapper>
    </main>
  );
};
