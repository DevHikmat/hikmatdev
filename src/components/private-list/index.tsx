import { memo, useEffect, useState } from "react";
import PrivateItem from "./PrivateItem";
import { calculateAge } from "../../utils";
import { useTranslation } from "react-i18next";
const PrivateList = () => {
  const { t } = useTranslation("asideleft");
  const [age, setAge] = useState<null | number>(null);
  const findMyAge = async () => {
    const myAge = await calculateAge();
    setAge(myAge);
  };
  useEffect(() => {
    findMyAge();
  }, []);
  const privateData = [
    {
      span: t("privateData.residence"),
      parag: t("privateData.residence_value"),
    },
    { span: t("privateData.age"), parag: t("privateData.age_value", { age }) },
    {
      span: t("privateData.freelance"),
      parag: t("privateData.freelance_value"),
    },
    { span: t("privateData.address"), parag: t("privateData.address_value") },
  ];
  return (
    <div className="private">
      {privateData.map((item) => (
        <PrivateItem key={String(Math.random())} item={item} />
      ))}
    </div>
  );
};
export default memo(PrivateList);