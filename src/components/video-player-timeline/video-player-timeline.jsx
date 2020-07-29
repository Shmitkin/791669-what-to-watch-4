import React from "react";
import PropTypes from "prop-types";

import {MINUTES_IN_HOUR, SECONDS_IN_MINUTE} from "../../consts.js";

const getSeconds = (seconds) => {
  return seconds % SECONDS_IN_MINUTE;
};

const getMinutes = (seconds) => {
  return (Math.floor(seconds / SECONDS_IN_MINUTE)) % MINUTES_IN_HOUR;
};

const getHours = (seconds) => {
  return Math.floor(seconds / (MINUTES_IN_HOUR * SECONDS_IN_MINUTE));
};

const addZero = (value) => {
  return value.toString().length === 2
    ? value
    : `0` + value;
};

const formatTime = (totalSeconds) => {
  const seconds = addZero(getSeconds(totalSeconds));
  const minutes = addZero(getMinutes(totalSeconds));
  const hours = getHours(totalSeconds);
  return `${hours}:${minutes}:${seconds}`;
};

export default function VideoPlayerTimeline({progress, remaining}) {

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100"></progress>
        <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{formatTime(remaining)}</div>
    </div>
  );
}

VideoPlayerTimeline.propTypes = {
  remaining: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

