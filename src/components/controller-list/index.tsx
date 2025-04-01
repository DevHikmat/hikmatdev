import { memo } from "react";
import ControllerListItem from "./ControllerListItem";
import { useTranslation } from "react-i18next";
import { controllerListItemType } from "../../types";
const ControllerList = () => {
  const { t } = useTranslation("asideright");
  const sidebarItemsData = t("sidebarItemsData", { returnObjects: true }) as controllerListItemType[];
  return (
    <ul className="controller">
      {sidebarItemsData.map((item, index) => (
        <ControllerListItem
          item={{
            ...item,
            icon: item.icon, 
          }}
          index={index.toString()}
          key={index}
        />
      ))}
    </ul>
  );
};
export default memo(ControllerList);