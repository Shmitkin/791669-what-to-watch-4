import React from "react";
import PropTypes from "prop-types";


export default function VideoPlayerFullscreenButton({onClick}) {

  return (
    <button type="button" className="player__full-screen" onClick={onClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

VideoPlayerFullscreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
