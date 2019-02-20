import React, { Component } from "react";

class Buttons extends Component {
  render() {
    let secondaryButton;
    if (this.props.labelSecondary) {
      secondaryButton = (
        <button
          type="button"
          className="btn btn-secondary btn-lg col-4 m-2"
          onClick={this.props.onSecondaryClick}
        >
          {this.props.labelSecondary}
        </button>
      );
    }
    return (
      <div className="form-group row justify-content-center">
        {secondaryButton}
        <button
          type="button"
          className="btn btn-primary col-4 m-2"
          onClick={this.props.onPrimaryClick}
        >
          {this.props.labelPrimary}
        </button>
      </div>
    );
  }
}

export default Buttons;
