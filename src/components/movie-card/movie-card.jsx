import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

export default class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onHover, onUnhover, onClick, isPlaying, movie} = this.props;
    const {title, preview, videoPrev} = movie;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter = {onHover}
        onMouseLeave = {onUnhover}
        onClick = {(evt) => {
          evt.preventDefault();
          onClick(movie);
        }}
      >
        <div className="small-movie-card__image">

          <VideoPlayer
            src = {videoPrev}
            poster = {preview}
            isPlaying = {isPlaying}
            muted = {true}
          />

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
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    videoPrev: PropTypes.string.isRequired,
  }).isRequired,
  onHover: PropTypes.func.isRequired,
  onUnhover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
