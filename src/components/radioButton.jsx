import React, { Component } from "react";

class RadioButton extends Component {
  render() {
    return (
      <div className="form-group">
        <div htmlFor={this.props.label}>{this.props.label}</div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="victoriaLocatedYes"
            className="form-check-input"
            name={this.props.name}
            value="YES"
            onChange={this.props.onChange}
            checked={this.props.value === "YES"}
            required={this.props.required}
          />
          <label className="form-check-label" htmlFor="victoriaLocatedYes">
            YES
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="victoriaLocatedNo"
            className="form-check-input"
            name={this.props.name}
            value="NO"
            onChange={this.props.onChange}
            checked={this.props.value === "NO"}
            required={this.props.required}
          />
          <label className="form-check-label" htmlFor="victoriaLocatedNo">
            NO
          </label>
        </div>
      </div>
    );
  }
}

export default RadioButton;
