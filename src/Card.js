import React from "react";

const Card = ({ movie: { id, year, image, title, Type, genre } }) => {
  // console.log(title);
  return (
    <div className="movie">
      <div>
        <p>{year}</p>
      </div>
      <div>
        <img src={image} alt="poster-img" />
      </div>
      <div>
        {genre?.map((item, i) => (
          <span key={i}>{item}</span>
        ))}

        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
