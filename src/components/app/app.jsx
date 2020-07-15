import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter, withRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";

import {MovieInfoTabs, DEFAULT_GENRE} from "../../consts.js";
import withActiveTab from "../../hocs/with-active-tab.jsx";

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
          <Route exact path="/films/:id" component={withRouter(MovieInfoWrapped)} />
          <Route exact path="/login" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    );

  }
}

export default App;
