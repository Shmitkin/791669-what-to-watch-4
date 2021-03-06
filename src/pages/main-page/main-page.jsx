import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieCardsList from "../../components/movie-cards-list/movie-cards-list.jsx";
import ShowMoreButton from "../../components/show-more-button/show-more-button.jsx";
import GenresList from "../../components/genres-list/genres-list.jsx";
import PageFooter from "../../components/page-footer/page-footer.jsx";
import PageHeader from "../../components/page-header/page-header.jsx";
import MovieBackground from "../../components/movie-background/movie-background.jsx";
import UserBlock from "../../components/user-block/user-block.jsx";
import MovieDescription from "../../components/movie-description/movie-description.jsx";
import MoviePoster from "../../components/movie-poster/movie-poster.jsx";

import {getMoviesByGenre, getPromoMovie, getGenres} from "../../reducer/data/selectors.js";
import {getShowingMovieCount} from "../../reducer/main/selectors.js";
import {ActionCreator} from "../../reducer/main/main.js";
import {MoviePosterSize} from "../../consts.js";


class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onGenreClickHandler = this._onGenreClickHandler.bind(this);
  }

  _onGenreClickHandler(genre) {
    const {onTabClick, onGenreClick} = this.props;
    onTabClick(genre);
    onGenreClick();
  }

  render() {
    const {
      promoMovie, activeTab, movies, showingMoviesCount,
      onShowMoreButtonCLick, genres
    } = this.props;

    return (
      <React.Fragment>
        <section className="movie-card">
          <MovieBackground movie = {promoMovie} />
          <h1 className="visually-hidden">WTW</h1>
          <PageHeader extraClass={`movie-card__head`}>
            <UserBlock />
          </PageHeader>
          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <MoviePoster movie={promoMovie} posterSize={MoviePosterSize.DEFAULT}/>
              <MovieDescription movie={promoMovie} isAddReviewButton={false}/>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList activeTab={activeTab} onTabClick={this._onGenreClickHandler} genres = {genres} />
            <MovieCardsList movies={movies.slice(0, showingMoviesCount)} />
            {movies.length >= showingMoviesCount ?
              <ShowMoreButton onClick = {onShowMoreButtonCLick}/> : null
            }
          </section>
          <PageFooter />
        </div>
      </React.Fragment>

    );
  }
}


MainPage.propTypes = {
  promoMovie: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  showingMoviesCount: PropTypes.number.isRequired,
  onShowMoreButtonCLick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onTabClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

const mapStateToProps = (state, props) => ({
  promoMovie: getPromoMovie(state),
  movies: getMoviesByGenre(state, props.activeTab),
  showingMoviesCount: getShowingMovieCount(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick() {
    dispatch(ActionCreator.resetMoviesShowingCount());
  },
  onShowMoreButtonCLick() {
    dispatch(ActionCreator.increaseMoviesShowingCount());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
