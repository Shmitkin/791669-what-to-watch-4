import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import history from "../history.js";

import MainPage from "../pages/main-page/main-page.jsx";
import MovieInfoPage from "../pages/movie-info-page/movie-info-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
import MyListPage from "../pages/my-list-page/my-list-page.jsx";
import AddReviewPage from "../pages/add-review-page/add-review-page.jsx";
import VideoPlayerPage from "../pages/video-player-page/video-player-page.jsx";
import Loader from "../components/loader/loader.jsx";
import PrivateRoute from "../components/private-route/private-route.jsx";

import {MovieInfoTabs, DEFAULT_GENRE, AppRoute, DataLoadStatus} from "../consts.js";
import withActiveTab from "../hocs/with-active-tab.jsx";


const DEFAULT_MOVIE_INFO_TAB = MovieInfoTabs.OVERVIEW;

const MovieInfoPageWrapped = withActiveTab(MovieInfoPage, DEFAULT_MOVIE_INFO_TAB);
const MainPageWrapped = withActiveTab(MainPage, DEFAULT_GENRE);


export default function App() {

  return (
    <Router history={history}>
      <Switch>

        <Route exact path={AppRoute.ROOT}>
          <Loader requiredData={[DataLoadStatus.MOVIES, DataLoadStatus.PROMO_MOVIE]}>
            <MainPageWrapped />
          </Loader>
        </Route>

        <Route exact path={`${AppRoute.FILMS}/:id`}>
          <Loader requiredData={[DataLoadStatus.MOVIES]}>
            <MovieInfoPageWrapped />
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
