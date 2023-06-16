import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.imageURL} alt="movie-banner" />
      <h2>{props.name}</h2>
      <h3>Year : {props.year}</h3>
      <Link to={`/movie/${props._videoID}`}>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </Link>
    </div>
  );
};

export default Movie;
