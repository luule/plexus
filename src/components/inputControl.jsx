import React, { Component } from "react";

class InputControl extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type}
          id={this.props.id}
          className="form-control"
          value={this.props.value}
          onChange={this.props.onChange}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default InputControl;
