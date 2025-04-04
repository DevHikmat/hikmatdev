import React from "react";
const ExtraItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="extra-skills-item">
      <img src="/images/Icons.png" alt="extra-skill" />
      <p>{text}</p>
    </div>
  );
};
export default ExtraItem;
