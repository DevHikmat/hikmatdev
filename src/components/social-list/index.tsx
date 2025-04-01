import { socialItems } from "../../utils";
import ListItem from "./ListItem";
import { memo } from "react";
const SocialList = () => {
  return (
    <ul className="profile-socials">
      {socialItems.map((item) => (
        <ListItem key={String(Math.random())} item={item} />
      ))}
    </ul>
  );
};
export default memo(SocialList);