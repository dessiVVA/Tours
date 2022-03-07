import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="img">
        <img
          src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"
          alt=""
        />
      </div>

      <div className="textArea">
        <h3 className="tourName">Best of Paris in 7 days</h3>
        <p className="price">$1,995</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eius
          enim quae nesciunt tempora at blanditiis eveniet delectus facere
          excepturi!
        </p>
      </div>
      <button type="button">Not Interested</button>
    </div>
  );
};

export default Card;
