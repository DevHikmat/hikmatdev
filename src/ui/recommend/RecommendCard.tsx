import React from "react";
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
        <img src="/images/Star.png" alt="star" />
        <img src="/images/Star.png" alt="star" />
        <img src="/images/Star.png" alt="star" />
        <img src="/images/Star.png" alt="star" />
        <img src="/images/Star.png" alt="star" />
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
