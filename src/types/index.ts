import {
  BriefcaseBusiness,
  Contact,
  GraduationCap,
  House,
  Layers,
  MessageSquareHeart,
  NotebookPen,
  UserCog,
  Braces,
  Code,
  MonitorSmartphone,
  MonitorUp,
  ScreenShare,
} from "lucide-react";
export const iconMap = {
  Code,
  GraduationCap,
  MonitorSmartphone,
  Braces,
  MonitorUp,
  ScreenShare
} as const;
// xizmatlar shabloni bola elementlari.
export interface ServiceItemProps {
  image: keyof typeof iconMap;
  title: string;
  desc: string;
}
export const iconsMap = {
  house: House,
  "user-cog": UserCog,
  "message-square-heart": MessageSquareHeart,
  "graduation-cap": GraduationCap,
  layers: Layers,
  "briefcase-business": BriefcaseBusiness,
  "notebook-pen": NotebookPen,
  contact: Contact,
} as const;
// O'ng tomon boshqaruvchi iconlar interfeysi;
export interface controllerListItemType {
  targetId: string;
  icon: keyof typeof iconsMap;
  text: string;
}
// API dan keladigan ma'lumot uchun interfeys
export interface TimeApiResponse {
  year: number;
  month: number;
  day: number;
}
// Til variantlari uchun interfeys.
export interface LanguageOption {
  value: string;
  label: string;
  flag: string;
}
// Ekstra skills
export interface extraSkillPropsType {
  heading: string;
  data: string[];
}
// o'qish va ish uchun ma'lumot interfeysi.
export interface InfoItemPropsType {
  name: string,
  level: string;
  year: string;
  profession: string;
  description: string;
}
// Shaxsiy ma'lumotlar shaploni uchun interfeys.
export interface privateItemType {
  span: string;
  parag: string | number | null;
}
// Qobilyat ko'rsatkichlari interfeysi.
export interface progressItemType {
    title: string,
    degree: string,
    percent: string
}
// Blog ui type
export type blogDataType = {
  imgUrl: string,
  title: string,
  description: string,
  linkUrl: string,
  learnText: string,
}
// Portfolio bola element type.
export type portfolioItemType = {
  title: string;
  image: string;
  url: string;
};
// Tavsiyanoma bola element type.
export type recommendItemType = {
  name: string;
  title: string;
  subtitle: string;
  profession: string;
  imageUrl: string;
};