import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mainMovieTitle, mainMovieGenre, mainMovieReleaseDate} = props;
  return (
    <MainScreen
      mainMovieTitle = {mainMovieTitle}
      mainMovieGenre = {mainMovieGenre}
      mainMovieReleaseDate = {mainMovieReleaseDate}
    />
  );
};


export default App;
