import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

class AutoComplete extends Component {
  addValidation = () => {
    if (document.getElementById("userLookup")) {
      let autocomplete = document.querySelector("#userLookup input");
      autocomplete.setAttribute("required", "true");
    }
  };
  render() {
    this.addValidation();
    return (
      <div id="userLookup" className="form-group">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <Typeahead
          onChange={selected => this.props.onChange(selected)}
          options={this.props.options}
          labelKey="fullName"
          selected={this.props.selected}
        />
      </div>
    );
  }
}

export default AutoComplete;
