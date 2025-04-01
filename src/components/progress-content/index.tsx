import React, { memo } from "react";
import ProgressItem from "./ProgressItem";
import { progressItemType } from "../../types";
interface propsType {
    heading: string,
    data: progressItemType[]
}
const ProgressContent: React.FC<propsType> = ({ heading, data }) => {
  return (
    <div className="lang">
      <h4>{heading}</h4>
      <div className="lang-content">
        {data.map((item) => <ProgressItem key={String(Math.random())} item={item} />)}
      </div>
    </div>
  );
};
export default memo(ProgressContent);