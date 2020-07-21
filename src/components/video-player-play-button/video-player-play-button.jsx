import React from "react";
import PropTypes from "prop-types";


export default function VideoPlayerPlayButton({onClick, disabled}) {

  return (
    <button type="button" className="player__play" onClick={onClick} disabled={disabled}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

VideoPlayerPlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

