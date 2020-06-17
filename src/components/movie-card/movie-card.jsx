import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieTitle, moviePreview, onMovieCardHover, onMovieCardUnhover, onMovieCardClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter = {() => onMovieCardHover(movieTitle)}
        onMouseLeave = {onMovieCardUnhover}
        onClick = {onMovieCardClick}
      >
        <div className="small-movie-card__image">
          <img
            src = {moviePreview}
            alt = {movieTitle}
            width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html">{movieTitle}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  moviePreview: PropTypes.string.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardUnhover: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};
