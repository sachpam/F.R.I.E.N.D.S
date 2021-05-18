import React from "react";

const ShowDetails = ({ items2 }) => {
  return (
    <div className="showDetails">
      <div className="show-img">
        {/* <div className="black-box"></div> */}
        <img src={items2.image.original} alt="img" />
      </div>
      <div className="show-details">
        <p dangerouslySetInnerHTML={{ __html: items2.summary }}></p>
        <p>
          Genre: {items2.genres[0]}, {items2.genres[1]}
        </p>
        <p>Network: {items2.network.name}</p>
        <p>Average Rating: {items2.rating.average}</p>
      </div>
    </div>
  );
};

export default ShowDetails;
