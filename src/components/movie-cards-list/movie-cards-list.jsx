import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import withCardHover from "../../hocs/with-card-hover.jsx";
import {connect} from "react-redux";
import {getMoviesByGenre} from "../../selectors.js";

const MovieCardWrapped = withCardHover(MovieCard);

function MovieCardsList({movies, onMovieCardClick}) {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) =>
        <MovieCardWrapped
          movie = {movie}
          key = {`${index}-${movie.title}`}
          onClick = {onMovieCardClick}
        />
      )}
    </div>
  );
}

MovieCardsList.propTypes = {
  onMovieCardClick: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state.movies, state.currentGenre)
});

export {MovieCardsList};
export default connect(mapStateToProps)(MovieCardsList);
