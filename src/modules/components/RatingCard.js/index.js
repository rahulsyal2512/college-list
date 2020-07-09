import React from "react";
import "./index.css";

const RatingCard = (props) => {
  const { promoted, rating, tags, rating_remarks, ranking } = props.college;
  return (
    <div className="rating-container">
      <div
        className="rating-first-section"
        style={{ marginTop: promoted ? "25px" : "15px" }}
      >
        <span className="rating">
          {rating}
          <span className="font">/5</span>
        </span>
        <span className="font">{rating_remarks}</span>
      </div>
      <div className="bottom-image-content-container">
        <div className="tags-container">
          {tags.map((tag, index) => (
            <div key={index} className="tags">
              {tag}
            </div>
          ))}
        </div>
        <div className="rank">
          <span>#{ranking}</span>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
