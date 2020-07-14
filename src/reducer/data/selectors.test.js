import {getMovies, getPromoMovie, getComments, getGenres, getMoviesByGenre, getMovieById, getSimilarMovies} from "./selectors.js";
import {DEFAULT_GENRE} from "../../consts.js";

const MOCK_FILM_ID = `77`;
const MOCK_GENRE = `Drama`;

const mockPromoMovie = {id: `1`, title: `Once Upon a Time in America`};

const mockMovies = [
  {id: MOCK_FILM_ID, title: `Legend`, genre: MOCK_GENRE},
  {id: `21`, title: `Seven Years in Tibet`, genre: `Adventure`},
  {id: `22`, title: `Johnny English`, genre: `Comedy`},
  {id: `25`, title: `Orlando`, genre: MOCK_GENRE}
];

const mockComments = [
  {text: `commentText`},
  {text: `commentText2`},
  {text: `commentText3`},
];

const mockState = {
  DATA: {
    movies: mockMovies,
    promoMovie: mockPromoMovie,
    comments: mockComments,
  }
};

describe(`Simple Selectors will return a value from state`, () => {

  it(`getMovies will return movies from state`, () => {
    expect(getMovies(mockState)).toEqual(mockMovies);
  });

  it(`getPromoMovie will return movies from state`, () => {
    expect(getPromoMovie(mockState)).toEqual(mockPromoMovie);
  });

  it(`getComments will return comments from state`, () => {
    expect(getComments(mockState)).toEqual(mockComments);
  });
});


describe(`getGenres will return`, () => {
  it(`an array with DEFAULT_GENRE and unique genres`, () => {
    expect(getGenres(mockState))
      .toHaveLength(4);
  });

  it(`an array with only DEFAULT_GENRE when movies is empty`, () => {
    expect(getGenres({DATA: {movies: []}})).toEqual([DEFAULT_GENRE]);
  });
});

describe(`getMoviesByGenre will return`, () => {
  it(`getMoviesByGenre will return an array with movies without changing when genre is DEFAULT_GENRE`, () => {
    expect(getMoviesByGenre(mockState, {activeTab: DEFAULT_GENRE}))
      .toEqual(mockMovies);
  });

  it(`getMoviesByGenre will return an array with movies, which genre is MOCK_GENRE`, () => {
    expect(getMoviesByGenre(mockState, {activeTab: MOCK_GENRE}))
      .toHaveLength(2);
  });
});

it(`getMovieById will return a movie with MOCK_ID`, () => {
  expect(getMovieById(mockState, {match: {params: {id: MOCK_FILM_ID}}}))
  .toEqual(mockMovies[0]);
});

it(`getSimilarMovies will return an array of movies with same genre that active movie, but without active movie`, () => {
  expect(getSimilarMovies(mockState, {match: {params: {id: MOCK_FILM_ID}}}))
  .toHaveLength(1);
});

