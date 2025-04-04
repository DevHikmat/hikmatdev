import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { portfolioItemType } from "../../types";
interface propsType {
  item: portfolioItemType;
}
const PortfolioItem: React.FC<propsType> = ({ item }) => {
  const { title, image, url } = item;
  return (
    <div className="portfolio-item">
      <a href={url} target="_blank">
        <p>
          <img src={image} alt={title} />
        </p>
        <div className="curtain">
          {title} <FontAwesomeIcon icon={faEye} />
        </div>
      </a>
    </div>
  );
};
export default PortfolioItem;
