import React from "react";
import PropTypes from "prop-types";

export default function MovieCard({title, preview, onHover, onUnhover, onClick, movie}) {

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter = {() => onHover(movie)}
      onMouseLeave = {onUnhover}
      onClick = {(evt) => {
        evt.preventDefault();
        onClick(movie);
      }}
    >
      <div className="small-movie-card__image">
        <img
          src = {preview}
          alt = {title}
          width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html">{title}
        </a>
      </h3>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  onUnhover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
