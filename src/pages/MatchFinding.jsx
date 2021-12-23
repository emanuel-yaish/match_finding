import React from "react";
import Movie from "../components/Movie";
import Button from "../components/Button";
import Counter from "../components/Counter";
import "./MatchFinding.css";
import { movies } from "../data/movies";

class MatchFinding extends React.Component {
  state = {
    currentMovie: 0,
    negetiveCouner: 0,
    positiveCouner: 0,
    animal: "",
    description: "",
  };

  like = () => {
    this.setState((state) => ({
      positiveCouner: state.positiveCouner + 1,
      currentMovie: state.currentMovie + 1,
    }));
  };
  unLike = () => {
    this.setState((state) => ({
      negetiveCouner: state.negetiveCouner + 1,
      currentMovie: state.currentMovie + 1,
    }));
  };
  getMovie = () => {
    if (movies.length === this.state.currentMovie) {
      if (this.state.negetiveCouner) {
        return (
          <div className="movie">The player is lost the watcher is lucid</div>
        );
      } else {
        return <div className="movie">May the Force be with you</div>;
      }
    }
    return (
      <Movie
        image={movies[this.state.currentMovie].Images[0]}
        name={movies[this.state.currentMovie].Title}
        year={movies[this.state.currentMovie].Year}
        awards={movies[this.state.currentMovie].Awards}
      />
    );
  };

  render() {
    if (movies.length < this.state.currentMovie)
      return <div className="match-finding">See you next time</div>;
    return (
      <div className="match-finding">
        <div className="match-finding-container">
          <div className="counter-contianer">
            <Counter
              counter={this.state.negetiveCouner}
              type="negative"
              icon="fa-user-minus"
            />
            <Counter
              counter={this.state.positiveCouner}
              type="positive"
              icon="fa-user-plus"
            />
          </div>
          {this.getMovie()}
          <div className="buttons-container">
            <Button
              action={this.unLike}
              type="negative"
              icon="fa-thumbs-down"
            />
            <Button action={this.like} type="positive" icon="fa-thumbs-up" />
          </div>
        </div>
      </div>
    );
  }
}

export default MatchFinding;
