import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.MAIN;

export const getShowingMovieCount = (state) => {
  return state[NAME_SPACE].showingMoviesCount;
};

