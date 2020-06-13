import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";

// eslint-disable-next-line react/prop-types
const App = ({mainMovieTitle, mainMovieGenre, mainMovieReleaseDate}) => {
  return (
    <MainScreen
      mainMovieTitle = {mainMovieTitle}
      mainMovieGenre = {mainMovieGenre}
      mainMovieReleaseDate = {mainMovieReleaseDate}
    />
  );
};


export default App;
