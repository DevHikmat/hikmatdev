import React from "react";
import { InfoItemPropsType } from "../../types";
const InfoItem: React.FC<{ item: InfoItemPropsType }> = ({ item }) => {
  const { name, level, year, profession, description } = item;
  return (
    <div className="info-container-item">
      <div className="left">
        <h4>{name}</h4>
        <div>
          <p>{profession}</p>
          <span>{year}</span>
        </div>
      </div>
      <div className="right">
        <h4>{level}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default InfoItem;
