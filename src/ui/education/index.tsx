import InfoList from "../../components/info-list";
import { useTranslation } from "react-i18next";
import { InfoItemPropsType } from "../../types";
const Education = () => {
  const { t } = useTranslation("education");
  const educationData = t("educationData", { returnObjects: true }) as InfoItemPropsType[];
  return (
    <section className="education start-for-active" id="education">
      <div data-aos="fade-up">
        <div className="heading-box">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <InfoList infoListData={educationData} />
      </div>
    </section>
  );
};
export default Education;
