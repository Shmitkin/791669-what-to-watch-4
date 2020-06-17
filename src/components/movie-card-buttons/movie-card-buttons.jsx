import React from "react";
import MyListButton from "../my-list-button/my-list-button.jsx";
import PlayButton from "../play-button/play-button.jsx";

const MovieCardButtons = () => {
  return (
    <div className="movie-card__buttons">
      <PlayButton />
      <MyListButton />
    </div>
  );
};

export default MovieCardButtons;
