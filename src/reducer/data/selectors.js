import {createSelector} from "reselect";

import {DEFAULT_GENRE, NAV_MAX_GENRES, MAX_SIMILAR_MOVIES} from "../../consts.js";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
};

export const getComments = (state) => {
  return state[NAME_SPACE].comments;
};

export const getUserFavoriteMovies = (state) => {
  return state[NAME_SPACE].favoriteMovies;
};

export const getGenres = createSelector(
    getMovies,
    (movies) => {
      const genres = movies.reduce((genresAccum, movie) => {
        return genresAccum.add(movie.genre);
      }, new Set([DEFAULT_GENRE]));
      return Array.from(genres).slice(0, NAV_MAX_GENRES);
    }
);

export const getMoviesByGenre = (state, genre) => {
  const movies = getMovies(state);
  if (genre === DEFAULT_GENRE) {
    return movies;
  } else {
    return movies.filter((movie) => movie.genre === genre);
  }
};

export const getMovieById = (state, id) => {
  const movies = getMovies(state);
  const [movieById] = movies.filter((movie) => movie.id === id);
  return movieById;
};

export const getSimilarMovies = (state, movieId) => {
  const movies = getMovies(state);
  const activeMovie = getMovieById(state, movieId);
  const {id, genre} = activeMovie;
  return movies.filter((movie) => movie.genre === genre && movie.id !== id).slice(0, MAX_SIMILAR_MOVIES);
};


