import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
// import {connect} from "react-redux";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {MovieInfoTabs} from "../../consts.js";
import withActiveTab from "../../hocs/with-active-tab.jsx";
import {DEFAULT_GENRE} from "../../consts.js";

const DEFAULT_MOVIE_INFO_TAB = MovieInfoTabs.OVERVIEW;


const MovieInfoWrapped = withActiveTab(MovieInfo, DEFAULT_MOVIE_INFO_TAB);
const MainScreenWrapped = withActiveTab(MainScreen, DEFAULT_GENRE);


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainScreenWrapped} />
          <Route exact path="/films/:id" component={MovieInfoWrapped} />
          <Route exact path="/login" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    );

  }
}

export default App;
