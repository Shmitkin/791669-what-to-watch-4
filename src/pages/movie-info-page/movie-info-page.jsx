import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import MovieCardsList from "../../components/movie-cards-list/movie-cards-list.jsx";
import PageFooter from "../../components/page-footer/page-footer.jsx";
import MovieDescription from "../../components/movie-description/movie-description.jsx";
import PageHeader from "../../components/page-header/page-header.jsx";
import MovieBackground from "../../components/movie-background/movie-background.jsx";
import MovieOverview from "../../components/movie-overview/movie-overview.jsx";
import MovieInfoNav from "../../components/movie-info-nav/movie-info-nav.jsx";
import MoviePoster from "../../components/movie-poster/movie-poster.jsx";
import MovieDetails from "../../components/movie-details/movie-details.jsx";
import MovieReviews from "../../components/movie-reviews/movie-reviews.jsx";
import UserBlock from "../../components/user-block/user-block.jsx";

import {MovieInfoTabs, MoviePosterSize} from "../../consts.js";
import {getSimilarMovies, getMovieById, getComments, getDataLoadStatus} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus, DataLoadStatus} from "../../consts.js";

class MovieInfoPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadReviews, movie} = this.props;
    loadReviews(movie.id);
  }

  componentDidUpdate(prevProps) {
    const {loadReviews, movie} = this.props;
    if (prevProps.movie.id !== movie.id) {
      loadReviews(movie.id);
    }
  }

  _renderInfo() {
    const {activeTab, movie, reviews} = this.props;

    switch (activeTab) {
      case MovieInfoTabs.OVERVIEW:
        return <MovieOverview movie={movie} />;
      case MovieInfoTabs.DETAILS:
        return <MovieDetails movie={movie} />;
      case MovieInfoTabs.REVIEWS:
        return <MovieReviews reviews={reviews} />;
      default:
        return <MovieOverview movie={movie} />;
    }
  }

  _checkAuthorizationStatus() {
    const {authorizationStatus} = this.props;
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {onTabClick, activeTab, movie, similarMovies} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">

            <MovieBackground movie={movie} />

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader extraClass={`movie-card__head`}>
              <UserBlock />
            </PageHeader>

            <div className="movie-card__wrap">
              <MovieDescription movie={movie} isAddReviewButton={this._checkAuthorizationStatus()}/>
            </div>

          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">

              <MoviePoster movie={movie} posterSize={MoviePosterSize.BIG}/>

              <div className="movie-card__desc">

                <MovieInfoNav onClick={onTabClick} activeTab={activeTab} />

                {this._renderInfo()}

              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MovieCardsList movies={similarMovies} />

          </section>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

MovieInfoPage.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  similarMovies: PropTypes.array.isRequired,
  loadReviews: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  similarMovies: getSimilarMovies(state, props.match.params.id),
  movie: getMovieById(state, props.match.params.id),
  reviews: getComments(state),
  authorizationStatus: getAuthorizationStatus(state),
  isMoviesLoaded: getDataLoadStatus(state, DataLoadStatus.MOVIES),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (movieId) => {
    dispatch(DataOperation.loadComments(movieId));
  }
});

export {MovieInfoPage};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieInfoPage));
