import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import withCardHover from "../../hocs/with-card-hover.jsx";

const MovieCardWrapped = withCardHover(MovieCard);

export default class MovieCardsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onMovieCardClick} = this.props;

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
}

MovieCardsList.propTypes = {
  onMovieCardClick: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};
