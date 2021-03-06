import React from "react";
import PropTypes from "prop-types";

const formatStarring = (starring) => {
  return starring.map((name, i) =>
    (i === starring.length - 1)
      ? <React.Fragment key={`${name}-${i}`}> {`${name}`} </React.Fragment>
      : <React.Fragment key={`${name}-${i}`}> {`${name},`} <br /></React.Fragment>
  );
};

const formatRunTime = (duration) => {
  const MINUTES_IN_HOUR = 60;
  return `${Math.floor(duration / MINUTES_IN_HOUR)}h ${duration % MINUTES_IN_HOUR}m`;
};

export default function MovieDetails(props) {
  const {movie} = props;
  const {director, starring, duration, genre, release} = movie;
  formatRunTime(duration);

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">{formatStarring(starring)}</span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatRunTime(duration)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{release}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    release: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};
