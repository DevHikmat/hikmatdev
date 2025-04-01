import RecommendCard from "./RecommendCard";
import Slider from "react-slick";
import "./recommend.scss";
import { useTranslation } from "react-i18next";
import { recommendItemType } from "../../types";
const Recommend = () => {
  const { t } = useTranslation("recommend");
  const recommendData = t("recommendData", {
    returnObjects: true,
  }) as recommendItemType[];
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="recommend start-for-active" id="recommend">
      <div data-aos="fade-up">
        <div className="heading-box">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="recommend-content">
          <Slider {...settings}>
            {recommendData.map((item) => (
              <RecommendCard key={String(Math.random())} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Recommend;
