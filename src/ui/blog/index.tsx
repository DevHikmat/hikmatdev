import { useTranslation } from "react-i18next";
import BlogItem from "./BlogItem";
import "./blog.scss";
import { blogDataType } from "../../types";
const Blog = () => {
  const { t } = useTranslation("blog");
  const blogData = t("blogData", { returnObjects: true }) as blogDataType[];
  return (
    <section className="blog start-for-active" id="blog">
      <div className="blog-inner" data-aos="fade-up">
        <div className="heading-box">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="blog-content">
          {blogData.map((item) => (
            <BlogItem key={String(Math.random())} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;