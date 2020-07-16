import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import PageHeader from "../page-header/page-header.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import AddReviewBreadcrumps from "../add-review-breadcrumbs/add-review-breadcrumbs.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import AddReviewForm from "../add-review-form/add-review-form.jsx";

import {MoviePosterSize} from "../../consts.js";
import {getMovieById} from "../../reducer/data/selectors.js";


export function AddReviewPage({movie}) {

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
        <AddReviewForm onFormChange={()=>{}} onFormSubmit={()=>{}}/>
      </div>

    </section>
  );
}

AddReviewPage.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  movie: getMovieById(state, props.match.params.id),
});

export default connect(mapStateToProps)(AddReviewPage);

