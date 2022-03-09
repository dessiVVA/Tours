import React, { useState } from "react";

const Card = (props) => {
  const [isShown, setIsShown] = useState(true);
  const [isReadMore, setIsReadMore] = useState(false);

  const handleNotInterested = () => {
    props.removeTour(props.id)
  };

  return (
    <div className="card">
      <div className="img">
        <img src={props.image} alt="Stuff" />
      </div>

      <div className="textArea">
        <h3 className="tourName">{props.name}</h3>
        <p className="price">${props.price}</p>
        <p className="description">
          {isReadMore ? props.info : props.info.substring(0, 100)}
          <button
            className="readMore"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Show less" : "Read more"}
          </button>
        </p>
      </div>
      <button className="btn" type="button" onClick={handleNotInterested}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
