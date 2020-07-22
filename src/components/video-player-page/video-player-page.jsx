import React from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player.jsx";
import VideoPlayerTimeline from "../video-player-timeline/video-player-timeline.jsx";
import VideoPlayerPlayButton from "../video-player-play-button/video-player-play-button.jsx";
import VideoPlayerPauseButton from "../video-player-pause-button/video-player-pause-button.jsx";
import VideoPlayerFullscreenButton from "../video-player-fullscreen-button/video-player-fullscreen-button.jsx";
import VideoPlayerExitButton from "../video-player-exit-button/video-player-exit-button.jsx";


export default function VideoPlayerPage(props) {
  const {
    movie, isPlaying, videoRef, progress, remaining,
    onExitButtonClickHandler,
    onPauseButtonClickHandler,
    onPlayButtonClickHandler,
    onFullscreenButtonClickHandler
  } = props;
  const {videoFull, preview, title} = movie;

  return (
    <div className="player">
      <VideoPlayer
        src={videoFull}
        poster={preview}
        muted={true}
        extraClass={`player__video`}
        videoRef={videoRef}
        loop={false}
      />

      <VideoPlayerExitButton onClick={onExitButtonClickHandler} />

      <div className="player__controls">
        <VideoPlayerTimeline progress={progress} remaining={remaining} />
        <div className="player__controls-row">
          {isPlaying
            ? <VideoPlayerPauseButton onClick={onPauseButtonClickHandler} />
            : <VideoPlayerPlayButton onClick={onPlayButtonClickHandler} />
          }
          <div className="player__name">{title}</div>
          <VideoPlayerFullscreenButton onClick={onFullscreenButtonClickHandler}/>

        </div>
      </div>
    </div>
  );
}

VideoPlayerPage.propTypes = {
  movie: PropTypes.shape({
    videoFull: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  videoRef: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  onExitButtonClickHandler: PropTypes.func.isRequired,
  onPauseButtonClickHandler: PropTypes.func.isRequired,
  onPlayButtonClickHandler: PropTypes.func.isRequired,
  onFullscreenButtonClickHandler: PropTypes.func.isRequired,
};

