import React from "react";
import "./Movie.css";

function Movie({ name, image, year, awards }) {
  return (
    <div className="movie">
      <figure className="movie-figure">
        <img className="movie-image" src={image} alt={name} />
        <figcaption className="movie-caption">
          {name} - {year}
        </figcaption>
      </figure>
      <p className="movie-awards">{awards}</p>
    </div>
  );
}

export default Movie;
