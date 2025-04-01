import React from "react";
import starImg from "../../static/images/Star.png";
import { recommendItemType } from "../../types";
interface RecommendCardProps {
  item: recommendItemType;
}
const RecommendCard: React.FC<RecommendCardProps> = ({ item }) => {
  const { title, subtitle, profession, imageUrl, name } = item;
  return (
    <div className="recommend-item">
      <div>
      <div className="stars">
        <img src={starImg} alt="star" />
        <img src={starImg} alt="star" />
        <img src={starImg} alt="star" />
        <img src={starImg} alt="star" />
        <img src={starImg} alt="star" />
      </div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
      </div>
      <div className="recommend-item-foot">
        <img src={imageUrl} alt={name} />
        <div className="info">
          <h4>{name}</h4>
          <p>{profession}</p>
        </div>
      </div>
    </div>
  );
};
export default RecommendCard;
