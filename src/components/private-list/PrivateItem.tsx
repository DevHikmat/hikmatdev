import React from "react";
import { privateItemType } from "../../types";
const PrivateItem: React.FC<{ item: privateItemType }> = ({ item }) => {
  return (
    <div className="private-item">
      <span>{item.span}</span> <p>{item.parag}</p>
    </div>
  );
};
export default PrivateItem;
