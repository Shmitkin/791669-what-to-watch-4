import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {src, poster, muted, extraClass = ``, videoRef, onTimeUpdate, onCanPlayThrough, onLoadedMetadata, loop = true} = this.props;

    return (
      <video
        ref={videoRef}
        width="280"
        height="175"
        src={src}
        loop={loop}
        muted={muted}
        poster={poster}
        className={extraClass}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onCanPlayThrough={onCanPlayThrough}
      >
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  // isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
};
