import React from "react";
import PropTypes from "prop-types";

export default function VideoPlayer(props) {
  const {src, poster, muted, extraClass, videoRef, loop} = props;

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
      controls={false}
    >
    </video>
  );
}

VideoPlayer.defaultProps = {
  extraClass: ``,
  loop: false,
  muted: true,
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  extraClass: PropTypes.string,
  videoRef: PropTypes.object.isRequired,
  loop: PropTypes.bool.isRequired,

};
