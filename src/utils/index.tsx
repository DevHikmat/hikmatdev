import axios from "axios";
import { TimeApiResponse } from "../types";
import { Facebook, Instagram, Linkedin, Twitter, Send  } from "lucide-react";
export const calculateAge = async (
  birthYear: number = 1998,
  birthMonth: number = 7,
  birthDay: number = 23
): Promise<number> => {
  let currentYear: number;
  let currentMonth: number;
  let currentDay: number;

  try {
    const { data } = await axios.get<TimeApiResponse>(
      "https://www.timeapi.io/api/Time/current/zone?timeZone=UTC"
    );
    currentYear = data.year;
    currentMonth = data.month;
    currentDay = data.day;
  } catch (error) {
    console.warn(
      "API orqali vaqt olinmadi, lokal vaqt ishlatilmoqda:",
      (error as Error).message
    );

    const now = new Date();
    currentYear = now.getFullYear();
    currentMonth = now.getMonth() + 1;
    currentDay = now.getDate();
  }

  const age =
    currentYear -
    birthYear -
    (currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
      ? 1
      : 0);

  return age;
};
export const changeAndSaveActiveIndex = () => {
  const navigateButtons =
    document.querySelectorAll<HTMLLIElement>(".controller li");
  const savedActiveIndex = localStorage.getItem("activeIndex");
  if (savedActiveIndex !== null) {
    navigateButtons[+savedActiveIndex]
      ?.querySelector("a")
      ?.classList.add("active");
  } else {
    navigateButtons[0]?.querySelector("a")?.classList.add("active");
  }
  const handleClick = (index: number) => {
    navigateButtons.forEach((item) =>
      item.querySelector("a")?.classList.remove("active")
    );
    navigateButtons[index].querySelector("a")?.classList.add("active");
    localStorage.setItem("activeIndex", index.toString());
  };
  navigateButtons.forEach((li, index) => {
    li.addEventListener("click", () => handleClick(index));
  });
};
export const socialItems = [
  {
    linkUrl: "https://facebook.com/hikmatullo.mullajonov",
    icon: <Facebook size={15} />,
  },
  {
    linkUrl: "https://instagram.com/hikmatullo_mullajonov",
    icon: <Instagram size={15} />,
  },
  { linkUrl: "https://x.com/Hikmatullo1663", icon: <Twitter size={15} /> },
  {
    linkUrl: "https://www.linkedin.com/in/hikmatullo-mullajonov/",
    icon: <Linkedin size={15} />,
  },
  {
    linkUrl: "https://t.me/devhikmat",
    icon:  <Send size={15}/>,
  },
];