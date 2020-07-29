import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import history from "../../history.js";
import {withRouter} from "react-router-dom";

import PageHeader from "../../components/page-header/page-header.jsx";
import UserBlock from "../../components/user-block/user-block.jsx";
import MoviePoster from "../../components/movie-poster/movie-poster.jsx";
import AddReviewBreadcrumps from "../../components/add-review-breadcrumbs/add-review-breadcrumbs.jsx";
import MovieBackground from "../../components/movie-background/movie-background.jsx";
import AddReviewForm from "../../components/add-review-form/add-review-form.jsx";
import withAddReviewFormValidation from "../../hocs/with-add-review-form-validation.jsx";

import {MoviePosterSize, AppRoute} from "../../consts.js";
import {getMovieById} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const WrappedAddReviewFrom = withAddReviewFormValidation(AddReviewForm);


function AddReviewPage({movie, sendComment}) {

  const onFormSubmit = (commentData, onError) => {
    sendComment(
        movie.id,
        commentData,
        () => history.push(`${AppRoute.FILMS}/${movie.id}`),
        onError
    );
  };


  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <MovieBackground movie={movie}/>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader>
          <AddReviewBreadcrumps movie={movie} />
          <UserBlock/>
        </PageHeader>
        <MoviePoster movie={movie} posterSize={MoviePosterSize.SMALL} />
      </div>

      <div className="add-review">
        <WrappedAddReviewFrom onFormSubmit={onFormSubmit}/>
      </div>

    </section>
  );
}

AddReviewPage.propTypes = {
  movie: PropTypes.object.isRequired,
  sendComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  sendComment(movieId, commentData, onSuccess, onError) {
    dispatch(DataOperation.sendNewComment(movieId, commentData, onSuccess, onError));
  }
});

export {AddReviewPage};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddReviewPage));

