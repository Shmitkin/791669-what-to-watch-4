import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {src, poster, muted} = this.props;

    return (
      <video
        ref = {this._videoRef}
        width = "280"
        height = "175"
        src = {src}
        loop = {true}
        muted = {muted}
        poster = {poster}
      >
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
};
