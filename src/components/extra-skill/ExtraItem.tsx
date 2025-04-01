import React from "react";
import extraImg from "../../static/images/Icons.png";
const ExtraItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="extra-skills-item">
      <img src={extraImg} alt="extra-skill" />
      <p>{text}</p>
    </div>
  );
};
export default ExtraItem;
