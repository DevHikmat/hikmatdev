import React, { memo } from "react";
import ExtraItem from "./ExtraItem";
import { extraSkillPropsType } from "../../types";
const ExtraSkill: React.FC<extraSkillPropsType> = ({ heading, data }) => {
  return (
    <div className="extra-skills">
      <h4>{heading}</h4>
      {data.map(text => <ExtraItem key={String(Math.random())} text={text} />)}
    </div>
  );
};
export default memo(ExtraSkill);
