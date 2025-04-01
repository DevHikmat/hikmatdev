import React from "react";
import ServiceItem from "./ServiceItem";
import "./service.scss";
import { useTranslation } from "react-i18next";
import { ServiceItemProps } from "../../types";
const MyServices: React.FC = () => {
  const { t } = useTranslation("services");
  let servicesData = t("servicesData", {
    returnObjects: true,
  }) as ServiceItemProps[];
  return (
    <section className="my-services start-for-active" id="services">
      <div data-aos="fade-up">
        <div className="heading-box">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="my-services-content">
          {servicesData.map((item) => (
            <ServiceItem key={String(Math.random())} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MyServices;