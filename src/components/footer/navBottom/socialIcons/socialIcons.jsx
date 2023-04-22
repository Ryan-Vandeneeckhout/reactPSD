import { SocialIconsItemMap } from "./socialIconsItemMap";
import "./socialIcons.scss";

export const SocialIcons = () => {
  return (
    <div className="icons-social-gallery">
      <ul className="ul-normalize">
        {SocialIconsItemMap.map((item, index) => {
          return (
            <li className="icon" key={index}>
              <img src={item.image} alt={`social-icon ${item.socialIcon}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
