import { recentProductsItemMap } from "./recentProductsItemMap";
import "./recentProducts.scss";

export const RecentProducts = () => {
  return (
    <div className="column">
      <h3>Recent Products</h3>
      <ul className="ul-normalize recent-products">
        {recentProductsItemMap.map((item, index) => {
          return (
            <li className="product-item" key={index}>
              <img src={item.image} alt={`social-icon ${item.socialIcon}`} />
              <div className="product-description">
                <p className="boldp">{item.productText}</p>
                <p className="boldp green">${item.productPrice}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
