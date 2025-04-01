import React, { JSX } from "react";
interface itemType {
  linkUrl: string;
  icon: JSX.Element;
}
const ListItem: React.FC<{ item: itemType }> = ({ item }) => {
  return (
    <li key={String(Math.random())}>
      <a href={item.linkUrl} target="_blank">
        {item.icon}
      </a>
    </li>
  );
};
export default ListItem;