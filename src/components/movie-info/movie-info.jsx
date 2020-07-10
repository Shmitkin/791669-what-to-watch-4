import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MovieDescription from "../movie-description/movie-description.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieInfoNav from "../movie-info-nav/movie-info-nav.jsx";
import MovieInfoPoster from "../movie-info-poster/movie-info-poster.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import UserBlock from "../user-block/user-block.jsx";

import {MovieInfoTabs} from "../../consts.js";
import {getSimilarMovies, getMovieById} from "../../reducer/data/selectors.js";

class MovieInfo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderInfo() {
    const {activeTab, movie} = this.props;
    switch (activeTab) {
      case MovieInfoTabs.OVERVIEW:
        return <MovieOverview
          movie = {movie}
        />;
      case MovieInfoTabs.DETAILS:
        return <MovieDetails
          movie = {movie}
        />;
      case MovieInfoTabs.REVIEWS:
        return <MovieReviews
          movie = {movie}
        />;
      default:
        return <MovieOverview
          movie = {movie}
        />;
    }
  }

  render() {
    const {onTabClick, activeTab, movie, similarMovies} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">

            <MovieBackground movie = {movie} />

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader extraClass={`movie-card__head`}>
              <UserBlock />
            </PageHeader>

            <div className="movie-card__wrap">
              <MovieDescription movie = {movie} isMovieDetails = {true} />
            </div>

          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">

              <MovieInfoPoster movie = {movie} />

              <div className="movie-card__desc">

                <MovieInfoNav onClick = {onTabClick} activeTab = {activeTab} />

                {this._renderInfo()}

              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MovieCardsList movies = {similarMovies} />

          </section>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

MovieInfo.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  similarMovies: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  similarMovies: getSimilarMovies(state, ownProps),
  movie: getMovieById(state, ownProps),
});

export {MovieInfo};
export default connect(mapStateToProps)(MovieInfo);
