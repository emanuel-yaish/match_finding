import React from "react";
import Movie from "../components/Movie";
import Button from "../components/Button";
import Counter from "../components/Counter";
import "./MatchFinding.css";
import { movies } from "../data/movies";

function MatchFinding(props) {
  const state = {
    currentMovie: 0,
    negetiveCouner: 0,
    positiveCouner: 0,
    animal: "",
    description: "",
  };

  const like = () => {};
  const unLike = () => {};
  const updateNegativeCounter = () => {};

  return (
    <div className="match-finding">
      <div className="match-finding-container">
        <div className="counter-contianer">
          <Counter counter={state.negetiveCouner} type="negative" />
          <Counter counter={state.positiveCouner} type="positive" />
        </div>
        <Movie
          image={movies[state.currentMovie].Images[0]}
          name={movies[state.currentMovie].Title}
          year={movies[state.currentMovie].Year}
          awards={movies[state.currentMovie].Awards}
        />
        <div className="buttons-container">
          <Button action={unLike} type="negative" />
          <Button action={like} type="positive" />
        </div>
      </div>
    </div>
  );
}

export default MatchFinding;
