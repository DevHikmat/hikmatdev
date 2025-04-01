import { useEffect, useState } from "react";
import { ArticleItems } from "./ui/index";
import Footer from "./ui/footer";
import { ArrowDownToLine, Moon, Sun } from "lucide-react";
import SocialList from "./components/social-list";
import ControllerList from "./components/controller-list";
import PrivateList from "./components/private-list";
import ProgressContent from "./components/progress-content";
import ExtraSkill from "./components/extra-skill";
import { changeAndSaveActiveIndex } from "./utils";
import { useTranslation } from "react-i18next";
import "./styles/App.scss";
import ChangeLang from "./components/change-lang";
import AOS from "aos";
import MediaNav from "./components/media-nav";
import { progressItemType } from "./types";
const resumeEnUrl = "/Hikmatullo_Mullajonov_en.pdf";
const resumeRuUrl = "/Hikmatullo_Mullajonov_ru.pdf";
const prevMode = localStorage.getItem("theme");
function App() {
  const { t, i18n } = useTranslation("asideleft");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(prevMode !== "light");
  const getTranslatedData = <T,>(key: string) =>
    t(key, { returnObjects: true }) as T;
  const languagesData = getTranslatedData<progressItemType[]>("languagesData");
  const skillsData = getTranslatedData<progressItemType[]>("skillsData");
  const extraSkillsData = getTranslatedData<string[]>("extraSkillsData");
  let currentResumeUrl;
  if (i18n.language === "ru") currentResumeUrl = resumeRuUrl;
  else currentResumeUrl = resumeEnUrl;
  const themeToggler = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    changeAndSaveActiveIndex();
  }, [isDarkMode]);
  useEffect(() => {
    if (!isDarkMode) document.body.classList.remove("dark");
    AOS.init({ duration: 1000, offset: 0 });
  }, []);
  return (
    <div className="App">
      <main>
        <aside className="first">
          <div className="wrapper">
            <div data-aos="fade-right" className="sidebar">
              <div className="profile">
                <div className="profile-img"></div>
                <div className="profile-info">
                  <h4>{t("fullname")}</h4>
                  <p>{t("job")}</p>
                </div>
                <SocialList />
              </div>
              <div className="line-under"></div>
              <PrivateList />
              <div className="line-under"></div>
              <ProgressContent heading={t("languages")} data={languagesData} />
              <div className="line-under"></div>
              <ProgressContent heading={t("skills")} data={skillsData} />
              <div className="line-under"></div>
              <ExtraSkill heading={t("extra_skills")} data={extraSkillsData} />
              <div className="line-under"></div>
              <a className="download" href={currentResumeUrl} download>
                {t("download")} <ArrowDownToLine />
              </a>
            </div>
          </div>
        </aside>
        <article>
          <MediaNav />
          <div className="wrapper">
            {ArticleItems.map((item, index) => (
              <div
                key={String(Math.random())}
                data-aos={index > 0 && "fade-up"}
              >
                {item}
              </div>
            ))}
            <Footer />
          </div>
        </article>
        <aside data-aos="fade-left" className="last">
          <div className="wrapper">
            <div className="controlbar">
              <div className="big-options">
                <div className="lang">
                  <ChangeLang isDarkMode={isDarkMode} />
                </div>
                <div className="theme" onClick={themeToggler}>
                  {isDarkMode ? <Sun /> : <Moon />}
                </div>
              </div>
              <ControllerList />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
export default App;