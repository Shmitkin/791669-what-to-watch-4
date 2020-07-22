import React from "react";
import PropTypes from "prop-types";


export default function VideoPlayerExitButton({onClick}) {

  return (
    <button type="button" className="player__exit" onClick={onClick}>Exit</button>
  );
}

VideoPlayerExitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
