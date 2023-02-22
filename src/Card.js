import React from "react";

const Card = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img src={Poster} alt="poster-img" />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default Card;
