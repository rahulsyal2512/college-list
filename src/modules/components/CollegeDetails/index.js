import React, { Fragment } from "react";
import "./index.css";

const CollegeDetails = (props) => {
  const {
    college_name,
    nearest_place,
    original_fees,
    famous_nearest_places,
    discounted_fees,
    discount,
    fees_cycle,
    rating,
  } = props.college;

  const renderNearestPlace = (str) => {
    const reg1 = new RegExp(/[k][m]/, "gmi");
    const reg2 = new RegExp(/[0-9.]+/, "gmi");
    const parts = str.split(" ");
    return parts.map((part, index) =>
      part.match(reg1) || part.match(reg2) ? (
        <span key={index}> {part}</span>
      ) : (
        <span key={index} className="grey">
          {" "}
          {part}
        </span>
      )
    );
  };

  const renderStars = (rating) => {
    const n = 5;
    return [...Array(n)].map((value, index) => (
      <Fragment key={index}>
        {index < rating ? (
          <span className="fa fa-star checked star-size"></span>
        ) : (
          <span className="fa fa-star star-size"></span>
        )}
      </Fragment>
    ));
  };

  return (
    <div className="college-details">
      <div className="details">
        <div className="college-name">
          <p className="margin">{college_name}</p>
          <div className="stars">{renderStars(rating)}</div>
        </div>
        <p className="margin-12">
          {nearest_place[0]} <span className="grey">| {nearest_place[1]}</span>
        </p>
        <p className="margin-12">
          <span className="green">93% Match :</span>{" "}
          <span>{renderNearestPlace(famous_nearest_places)}</span>
        </p>
      </div>
      <div className="offers">
        <div className="price-tag-container">
          <p className="original-price margin">₹{original_fees}</p>
          <div className="discount-tag">
            <span className="discount">{discount}</span>
          </div>
        </div>

        <p className="margin discounted-price">₹{discounted_fees}</p>
        <p className="margin">{fees_cycle}</p>
      </div>
    </div>
  );
};

export default CollegeDetails;
