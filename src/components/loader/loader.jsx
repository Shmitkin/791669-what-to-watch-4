import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getDataLoadStatus} from "../../reducer/data/selectors.js";
import {DataLoadStatus} from "../../consts.js";


function Loader({children, requiredData, isDataLoaded}) {
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
  children: PropTypes.object.isRequired,
};

const MapStateToProps = (state) => ({
  isDataLoaded: (data) => getDataLoadStatus(state, data),
});

export {Loader};
export default connect(MapStateToProps)(Loader);
