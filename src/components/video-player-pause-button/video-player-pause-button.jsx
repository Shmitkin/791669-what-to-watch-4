import React from "react";
import PropTypes from "prop-types";


export default function VideoPlayerPauseButton({onClick}) {

  return (
    <button type="button" className="player__play" onClick={onClick}>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>
  );
}

VideoPlayerPauseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
