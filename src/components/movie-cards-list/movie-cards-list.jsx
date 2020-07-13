import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import withCardHover from "../../hocs/with-card-hover.jsx";

const MovieCardWrapped = withCardHover(MovieCard);

export default function MovieCardsList({movies}) {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) =>
        <MovieCardWrapped
          movie = {movie}
          key = {movie.id}
        />
      )}
    </div>
  );
}

MovieCardsList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

