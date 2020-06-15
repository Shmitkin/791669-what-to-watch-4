import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({movieTitle, onMovieCardTitleClick}) => {
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={movieTitle} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            onClick={onMovieCardTitleClick}
            href="movie-page.html">{movieTitle}
          </a>
        </h3>
      </article>
    </React.Fragment>
  );
};

MovieCard.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
