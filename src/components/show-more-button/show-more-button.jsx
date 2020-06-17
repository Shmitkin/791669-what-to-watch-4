import React, {PureComponent} from "react";

export default class ShowMoreButton extends PureComponent {

  render() {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    );
  }
}
