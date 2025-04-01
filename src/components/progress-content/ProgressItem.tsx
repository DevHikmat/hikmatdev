import React from "react";
import { progressItemType } from "../../types";
const ProgressItem:React.FC<{item: progressItemType}> = ({item}) => {
  return (
    <div className="lang-item">
      <div className="lang-between">
        <p>{item.title}</p> <p>{item.degree}</p>
      </div>
      <div className="lang-progress">
        <div style={{ width: item.percent }} className="lang-progress-fill"></div>
      </div>
    </div>
  );
};
export default ProgressItem;