import { portfolioItemType } from "../../types";
import PortfolioItem from "./PortfolioItem";
import "./portfolio.scss";
import { useTranslation } from "react-i18next";
const Portfolio = () => {
  const { t } = useTranslation("portfolio");
  const portfolioData = t("portfolioData", {
    returnObjects: true,
  }) as portfolioItemType[];
  return (
    <section className="portfolio start-for-active" id="portfolio">
      <div data-aos="fade-up">
        <div className="heading-box">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="portfolio-content">
          {portfolioData.map((item) => (
            <PortfolioItem key={String(Math.random())} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
