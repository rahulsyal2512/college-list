import React, { Fragment } from "react";
import "./index.css";

const OfferAndAmenties = (props) => {
  const { amenties, offertext } = props.college;

  const renderOfferText = (str) => {
    const reg1 = new RegExp(/[0-9]+/, "gmi");
    const reg2 = new RegExp(/login/, "gmi");
    const parts = str.split(" ");
    return (
      <span>
        {parts.map((part) => {
          if (part.match(reg1)) {
            return <span className="green"> {part}</span>;
          } else if (part.match(reg2)) {
            return <span className="blue pointer"> {part}</span>;
          } else {
            return <span> {part}</span>;
          }
        })}
      </span>
    );
  };

  return (
    <div className="bottom-container border-radius-5">
      <div className="login-wrapper">
        <p className="margin">{renderOfferText(offertext)}</p>
      </div>

      <div className="amenties">
        {amenties.map((value, index) => (
          <Fragment key={index}>
            <p className="margin green">{value}</p>
            {index !== amenties.length - 1 ? (
              <span className="green bullet"> &#8226; </span>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default OfferAndAmenties;
