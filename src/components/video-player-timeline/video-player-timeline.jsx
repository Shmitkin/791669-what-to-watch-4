import React from "react";
import PropTypes from "prop-types";


export default function VideoPlayerTimeline({progress, remaining}) {

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100"></progress>
        <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{remaining}</div>
    </div>
  );
}

VideoPlayerTimeline.propTypes = {
  remaining: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

