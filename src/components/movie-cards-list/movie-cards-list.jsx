import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";


export default class MovieCardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
    this._movieCardHoverHandler = this._movieCardHoverHandler.bind(this);
    this._movieCardUnhoverHandler = this._movieCardUnhoverHandler.bind(this);
    //   this._movieCardClickHandler = this._movieCardClickHandler.bind(this);

  }

  _movieCardHoverHandler(movie) {
    this.setState({movie});
  }

  _movieCardUnhoverHandler() {
    this.setState({movie: null});
  }

  render() {
    const {movies, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) =>
          <MovieCard
            movie = {movie}
            key = {`${index}-${movie.title}`}
            title = {movie.title}
            preview = {movie.preview}
            onHover = {this._movieCardHoverHandler}
            onUnhover = {this._movieCardUnhoverHandler}
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
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};
