import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { blogDataType } from "../../types";
interface dataPropsType {
    data: blogDataType
}
const BlogItem:React.FC<dataPropsType> = ({data}) => {
    const {imgUrl, title, description, linkUrl, learnText} = data;
  return (
    <div className="blog-item">
      <div className="blog-item-head">
      <img src={imgUrl} alt={title} />
      </div>
      <div className="blog-item-body">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={linkUrl} target="_blank">
          {learnText} <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
    </div>
  );
};
export default BlogItem;
