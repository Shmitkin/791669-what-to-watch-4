import React, {PureComponent} from "react";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import MainScreen from "../main-screen/main-screen.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import AddReviewPage from "../add-review-page/add-review-page.jsx";
import VideoPlayerPage from "../video-player-page/video-player-page.jsx";
import Loader from "../loader/loader.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

import {MovieInfoTabs, DEFAULT_GENRE, AppRoute, DataLoadStatus} from "../../consts.js";
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
      <Router history={history}>
        <Switch>

          <Route exact path={AppRoute.ROOT}>
            <Loader requiredData={[DataLoadStatus.MOVIES, DataLoadStatus.PROMO_MOVIE]}>
              <MainScreenWrapped />
            </Loader>
          </Route>

          <Route exact path={`${AppRoute.FILMS}/:id`}>
            <Loader requiredData={[DataLoadStatus.MOVIES]}>
              <MovieInfoWrapped />
            </Loader>
          </Route>

          <Route exact path={AppRoute.LOGIN} component={SignInPage} />


          <PrivateRoute exact path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}
            render={()=>{
              return (
                <Loader requiredData={[DataLoadStatus.MOVIES]}>
                  <AddReviewPage />
                </Loader>
              );
            }}
          />

          <Route exact path={`${AppRoute.PLAYER}/:id`}>
            <Loader requiredData={[DataLoadStatus.MOVIES]}>
              <VideoPlayerPage />
            </Loader>
          </Route>

          <PrivateRoute exact path={AppRoute.MY_LIST}
            render={() => {
              return (
                <MyListPage />
              );
            }}
          />

        </Switch>
      </Router>
    );
  }
}

export default App;
