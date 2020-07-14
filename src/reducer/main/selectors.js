import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.MAIN;

export const getActiveGenre = (state, props) => {
  return props.activeTab;
};

export const getActiveMovieId = (state, props) => {
  return props.match.params.id;
};

export const getShowingMovieCount = (state) => {
  return state[NAME_SPACE].showingMoviesCount;
};

