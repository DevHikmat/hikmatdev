import React from "react";
import ChangeLang from "../change-lang";
import { Moon, Sun } from "lucide-react";
type MediaNavProps = {
  isDarkMode: boolean;
  themeToggler: () => void;
};
const MediaNav: React.FC<MediaNavProps> = ({ isDarkMode, themeToggler }) => {
  const hamburgerMenuToggler = (event: React.MouseEvent<SVGSVGElement>) => {
    const asideLeft = document.querySelector(
      "aside.first"
    ) as HTMLElement | null;
    event.currentTarget.classList.toggle("active");
    if (asideLeft && event.currentTarget.classList.contains("active")) {
      asideLeft.style.left = "0";
    } else if (asideLeft) {
      asideLeft.style.left = "-100%";
    }
  };
  return (
    <nav className="media-nav">
      <svg
        className="ham hamRotate ham8"
        viewBox="0 0 100 100"
        width="60"
        onClick={hamburgerMenuToggler}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
      <div className="big-options-mobile">
        <div className="lang">
          <ChangeLang isDarkMode={isDarkMode} />
        </div>
        <div className="theme" onClick={themeToggler}>
          {isDarkMode ? <Sun /> : <Moon />}
        </div>
      </div>
    </nav>
  );
};
export default MediaNav;
