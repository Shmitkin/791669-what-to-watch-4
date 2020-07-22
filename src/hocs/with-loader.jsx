import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation as DataOperation} from "../reducer/data/data.js";


export default function withLoader(Component) {
  class WithLoader extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMoviesLoading: true,
        isPromoMovieLoading: true,
      };

      this._loadData();
    }

    _loadData() {
      const {loadPromoMovie, loadMovies} = this.props;
      loadPromoMovie(()=> {
        this.setState({
          isPromoMovieLoading: false
        });
      });

      loadMovies(()=>{
        this.setState({
          isMoviesLoading: false
        });
      });
    }

    render() {
      const {isMoviesLoading, isPromoMovieLoading} = this.state;
      return (
        (!isMoviesLoading && !isPromoMovieLoading)
          ? <Component
            {...this.props}
          />
          : null
      );
    }
  }

  WithLoader.propTypes = {
    loadPromoMovie: PropTypes.func.isRequired,
    loadMovies: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    loadPromoMovie: (onSuccess) => dispatch(DataOperation.loadPromoMovie(onSuccess)),
    loadMovies: (onSuccess) => dispatch(DataOperation.loadMovies(onSuccess)),
  });

  return connect(null, mapDispatchToProps)(WithLoader);

}
