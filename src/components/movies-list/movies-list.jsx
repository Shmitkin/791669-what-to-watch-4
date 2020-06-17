import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";


export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movie: ``
    };
    this._movieCardHoverHandler = this._movieCardHoverHandler.bind(this);
    this._movieCardUnhoverHandler = this._movieCardUnhoverHandler.bind(this);
    this._movieCardClickHandler = this._movieCardClickHandler.bind(this);

  }

  _movieCardHoverHandler(movieTitle) {
    this.setState({movie: movieTitle});
  }

  _movieCardUnhoverHandler() {
    this.setState({movie: ``});
  }

  _movieCardClickHandler(evt) {
    evt.preventDefault();
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) =>
          <MovieCard
            key = {`${index}-${movie.title}`}
            movieTitle = {movie.title}
            moviePreview = {movie.preview}
            onMovieCardHover = {this._movieCardHoverHandler}
            onMovieCardUnhover = {this._movieCardUnhoverHandler}
            onMovieCardClick = {this._movieCardClickHandler}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};
