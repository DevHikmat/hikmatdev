import InfoList from "../../components/info-list";
import { useTranslation } from "react-i18next";
import { InfoItemPropsType } from "../../types";
const Experience = () => {
  const { t } = useTranslation("experience");
  const experienceData = t("experienceData", { returnObjects: true }) as InfoItemPropsType[];
  return (
    <section className="experience start-for-active" id="experience">
      <div data-aos="fade-up">
        <div className="heading-box">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <InfoList infoListData={experienceData} />
      </div>
    </section>
  );
};
export default Experience;
