import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { iconMap, ServiceItemProps } from "../../types";
import { ArrowRight } from "lucide-react";
const ServiceItem: React.FC<{ data: ServiceItemProps }> = ({ data }) => {
  const { image, title, desc } = data;
  const { t } = useTranslation("services");
  const handleSaveActive = () => {
    localStorage.setItem("activeIndex", "7");
  };
  const IconComponent = iconMap[image]; 
  return (
    <div className="my-services-item">
      {IconComponent && <IconComponent size={24} />} 
      <h4>{title}</h4>
      <div className="backword">
        <h4>{title}</h4>
        <p>{desc}</p>
        <Link
          to={"contact"}
          spy={true}
          smooth={true}
          duration={500}
          offset={0}
          onSetActive={handleSaveActive}
          style={{display: "flex", alignItems: 'center', justifyContent: "center"}}
        >
          {t("hirebutton")} <ArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default ServiceItem;