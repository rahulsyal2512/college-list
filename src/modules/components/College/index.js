import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import CollegeList from "../../common/colleges.json";
import "./index.css";
import PromotedTag from "../PromotedTag";
import RatingCard from "../RatingCard.js";
import CollegeDetails from "../CollegeDetails";
import Loader from "../Loader";
import { LIMIT } from "../../constants";

let page = 1;

const Colleges = () => {
  const [collegeList, setCollegeList] = useState([]);
  const [start, setStart] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreContent = () => {
    const list = [
      ...collegeList,
      ...CollegeList.colleges.slice(start, [LIMIT * page]),
    ];
    setCollegeList(list);
    setStart(LIMIT * page);
    if (CollegeList.colleges.length <= LIMIT * page) {
      setHasMore(false);
    }
    page = page + 1;
  };

  const ITEMS = [];

  return (
    <>
      {collegeList.map((college, index) => {
        ITEMS.push(
          <div key={index} className="college border-radius-5">
            {college.promoted && <PromotedTag />}
            <img
              className="college-image border-radius-5 border-radius-bottom-none"
              src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_311,q_auto/v1594225396/college_02_trrxcc.jpg"
              alt={college.college_name || "college"}
            ></img>
            <RatingCard college={college} />
            <CollegeDetails college={college} />
          </div>
        );
        return "";
      })}
      <InfiniteScroll
        className="college-list-wrapper"
        pageStart={0}
        loadMore={loadMoreContent}
        hasMore={hasMore}
        loader={<Loader key={0} />}
      >
        {ITEMS}
      </InfiniteScroll>
    </>
  );
};

export default Colleges;
