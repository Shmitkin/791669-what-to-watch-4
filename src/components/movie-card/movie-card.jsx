import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

export default class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {title, preview, onHover, onUnhover, onClick, movie} = this.props;
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter = {() => {
          onHover(movie);
          this.setState({isPlaying: true});
        }}
        onMouseLeave = {() => {
          onUnhover();
          this.setState({isPlaying: false});
        }}
        onClick = {(evt) => {
          evt.preventDefault();
          onClick(movie);
        }}
      >
        <div className="small-movie-card__image">

          <VideoPlayer
            src = {movie.videoPrev}
            poster = {preview}
            isPlaying = {this.state.isPlaying}
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
  movie: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  onUnhover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
