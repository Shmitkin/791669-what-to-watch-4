import {createSelector} from "reselect";

import {DEFAULT_GENRE, NAV_MAX_GENRES, MAX_SIMILAR_MOVIES} from "../../consts.js";
import NameSpace from "../name-space.js";
import {getActiveGenre, getActiveMovieId} from "../main/selectors.js";

const NAME_SPACE = NameSpace.DATA;

const getMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
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

export const getMoviesByGenre = createSelector(
    getMovies,
    getActiveGenre,
    (movies, genre) => {
      if (genre === DEFAULT_GENRE) {
        return movies;
      } else {
        return movies.filter((movie) => movie.genre === genre);
      }
    }
);

export const getMovieById = createSelector(
    getMovies,
    getActiveMovieId,
    (movies, id) => {
      const [movieById] = movies.filter((movie) => movie.id === id);
      return movieById;
    }
);

export const getSimilarMovies = createSelector(
    getMovies,
    getMovieById,
    (movies, currentMovie) => {
      const {id, genre} = currentMovie;
      return movies.filter((movie) => movie.genre === genre && movie.id !== id).slice(0, MAX_SIMILAR_MOVIES);
    }
);


