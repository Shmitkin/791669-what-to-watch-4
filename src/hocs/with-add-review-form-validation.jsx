import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const InputType = {
  RADIO: `radio`,
  TEXTAREA: `textarea`,
};

const ReviewTextLength = {
  MIN: 50,
  MAX: 400,
};

const ErrorMessage = {
  REVIEW: `Please enter your review`,
  RATING: `Please set rating`,
  REVIEW_MIN: `Your review should have more than ${ReviewTextLength.MIN} symbols`,
  REVIEW_MAX: `Your review should be less than ${ReviewTextLength.MAX} symbols`,
  SERVER: `Some error occured on our server, please try again later`
};

export default function withAddReviewFormValidation(Component) {
  class WithAddReviewFormValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        errorMessages: [],
        isPostButtonDisabled: true,
        rating: null,
        text: ``,
        isFormDisabled: false,
      };

      this._onFormSubmit = this._onFormSubmit.bind(this);
      this._onFormChange = this._onFormChange.bind(this);
      this._onErrorHandler = this._onErrorHandler.bind(this);
    }

    _isReviewTextCorrect() {
      const {text} = this.state;
      return (text.length >= ReviewTextLength.MIN && text.length <= ReviewTextLength.MAX);
    }

    _isRatingSetted() {
      const {rating} = this.state;
      return rating ? true : false;
    }

    _setErrorMessages() {
      const {rating, text} = this.state;
      const errorMessages = [];

      if (text.length === 0) {
        errorMessages.push(ErrorMessage.REVIEW);
      }
      if (!(text.length >= ReviewTextLength.MIN)) {
        errorMessages.push(ErrorMessage.REVIEW_MIN);
      }
      if (!(text.length <= ReviewTextLength.MAX)) {
        errorMessages.push(ErrorMessage.REVIEW_MAX);
      }
      if (rating === null) {
        errorMessages.push(ErrorMessage.RATING);
      }
      return errorMessages;
    }

    _checkValidity() {
      if (this._isReviewTextCorrect() && this._isRatingSetted()) {
        this.setState({
          isPostButtonDisabled: false,
          errorMessages: [],
        });
      } else {
        this.setState({
          errorMessages: this._setErrorMessages(),
          isPostButtonDisabled: true,
        });
      }
    }

    _onFormChange(evt) {
      switch (evt.target.type) {
        case InputType.RADIO:
          this.setState({
            rating: evt.target.value,
            errorMessages: [],
          }, this._checkValidity);
          break;
        case InputType.TEXTAREA:
          this.setState({
            text: evt.target.value,
            errorMessages: [],
          }, this._checkValidity);
          break;
      }
    }

    _onFormSubmit(evt) {
      evt.preventDefault();
      this.setState({
        isFormDisabled: true,
      });

      this.props.onFormSubmit(
          {
            rating: this.state.rating,
            text: this.state.text,
          },
          this._onErrorHandler
      );
    }

    _onErrorHandler() {
      this.setState({
        errorMessages: [ErrorMessage.SERVER],
        isFormDisabled: false,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onFormSubmit = {this._onFormSubmit}
          onFormChange = {this._onFormChange}
          isPostButtonDisabled = {this.state.isPostButtonDisabled}
          errorMessages = {this.state.errorMessages}
          isFormDisabled = {this.state.isFormDisabled}
        />
      );
    }
  }

  WithAddReviewFormValidation.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  return WithAddReviewFormValidation;
}
