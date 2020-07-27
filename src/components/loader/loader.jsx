import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getDataLoadStatus} from "../../reducer/data/selectors.js";
import {DataLoadStatus} from "../../consts.js";


export function Loader({children, requiredData, isDataLoaded}) {
  const loadStatus = requiredData.map((data) => isDataLoaded(data));

  return loadStatus.indexOf(false) === -1
    ? children
    : null;
}

Loader.propTypes = {
  isDataLoaded: PropTypes.func.isRequired,
  requiredData: PropTypes.arrayOf(
      PropTypes.oneOf(Object.values(DataLoadStatus))
  ).isRequired,
};

const MapStateToProps = (state) => ({
  isDataLoaded: (data) => getDataLoadStatus(state, data),
});

export default connect(MapStateToProps)(Loader);
