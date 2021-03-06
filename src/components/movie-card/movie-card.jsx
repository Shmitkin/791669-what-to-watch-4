import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import VideoPlayer from "../video-player/video-player.jsx";
import {AppRoute} from "../../consts";

export default function MovieCard(props) {
  const {onHover, onUnhover, movie, videoRef} = props;
  const {title, preview, videoPrev, id} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter = {onHover}
      onMouseLeave = {onUnhover}
    >
      <Link to={`${AppRoute.FILMS}/${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          <VideoPlayer src={videoPrev} poster={preview} muted={true} loop={true} videoRef={videoRef}/>
        </div>
        <h3 className="small-movie-card__title">{title}</h3>
      </Link>
    </article>
  );
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    videoPrev: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onHover: PropTypes.func.isRequired,
  onUnhover: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired,
};
