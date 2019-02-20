import React, { Component } from "react";

class DropDown extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id} className="font-weight-bold">
          {this.props.label}
        </label>
        <select
          name={this.props.label}
          id={this.props.id}
          className="form-control"
          onChange={this.props.onChange}
          value={this.props.value}
          required={this.props.required}
        >
          <option value="" disabled>
            {this.props.placeholder}
          </option>
          {this.props.options.map(option => (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default DropDown;
