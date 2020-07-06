import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function PageHeader(props) {
  const {children, extraClass} = props;
  return (
    <header className={`page-header ${extraClass}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
    </header>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node,
  extraClass: PropTypes.string,
};
