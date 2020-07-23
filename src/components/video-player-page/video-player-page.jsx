import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import history from "../../history.js";

import VideoPlayerContainer from "../video-player-container/video-player-container.jsx";

import withVideoPlayerControls from "../../hocs/with-video-player-controls.jsx";
import {getMovieById} from "../../reducer/data/selectors.js";
import {AppRoute} from "../../consts.js";

const WrappedVideoPlayerContainer = withVideoPlayerControls(VideoPlayerContainer);

function VideoPlayerPage({movie}) {

  const onExitButtonClickHandler = () => {
    return history.push(`${AppRoute.FILMS}/${movie.id}`);
  };

  return (
    <WrappedVideoPlayerContainer
      onExitButtonClickHandler={onExitButtonClickHandler}
      movie={movie}
    />
  );
}

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.match.params.id)
});

VideoPlayerPage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
};

export {VideoPlayerPage};
export default withRouter(connect(mapStateToProps)(VideoPlayerPage));
