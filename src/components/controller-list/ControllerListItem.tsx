import React from "react";
import { Link } from "react-scroll";
import { controllerListItemType, iconsMap } from "../../types";
const ControllerListItem: React.FC<{
  item: controllerListItemType;
  index: string;
}> = ({ item, index }) => {
  const handleSaveActive = (index: string) => {
    localStorage.setItem("activeIndex", index);
  };
  const IconComponent = iconsMap[item.icon]; 
  return (
    <li>
      <Link
        to={item.targetId}
        spy={true}
        smooth={true}
        duration={500}
        offset={0}
        activeClass="active"
        onSetActive={() => handleSaveActive(index)}
      >
        <IconComponent size={20} /> 
      </Link>
      <span>{item.text}</span>
    </li>
  );
};
export default ControllerListItem;
