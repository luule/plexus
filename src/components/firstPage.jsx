import React, { Component } from "react";
import InputControl from "./inputControl";
import DropDown from "./dropDown";
import Autocomplete from "./autocomplete";
import Buttons from "./buttons";

class FirstPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeType: "",
      details: "",
      firstName: "",
      lastName: "",
      userList: [],
      selectedUser: [],
      storeTypeList: [
        { id: 1, value: "Mall" },
        { id: 2, value: "Metro" },
        { id: 3, value: "Arcade" },
        { id: 4, value: "Centre" }
      ]
    };

    if (props.location.states && props.location.states.previous) {
      this.state = props.location.states.previous;
    }
  }

  componentDidMount = () => {
    const url = "https://randomuser.me/api/?results=50&nat=au&exc=login";
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          let userList = [...result.results];
          userList.forEach(user => {
            user.fullName =
              user.name.title + " " + user.name.first + " " + user.name.last;
          });
          this.setState({
            userList: userList
          });
        },
        error => {
          console.log(error);
        }
      );
  };

  handleSelectChange = e => {
    this.setState({ storeType: e.target.value });
  };

  handleChangeAutocomplete = selected => {
    if (selected && selected[0]) {
      this.setState({
        firstName: selected[0].name.first,
        lastName: selected[0].name.last,
        selectedUser: selected
      });
    }
  };

  handleControlChange = e => {
    let type = e.target.id;
    switch (type) {
      case "storeType":
        this.setState({ storeType: e.target.value });
        break;
      case "firstName":
        this.setState({ firstName: e.target.value });
        break;
      case "lastName":
        this.setState({ lastName: e.target.value });
        break;
      case "provideDetails":
        this.setState({ details: e.target.value });
        break;
      default:
        break;
    }
  };

  handleNextClick = () => {
    let form = document.getElementById("myForm");
    if (form.checkValidity() === true) {
      this.props.history.push({
        pathname: "/final",
        states: {
          previous: this.state,
          next:
            this.props.location.states && this.props.location.states.next
              ? this.props.location.states.next
              : undefined
        }
      });
    }
    form.classList.add("was-validated");
  };
  render() {
    let provideDetails;
    if (this.state.storeType === "2") {
      provideDetails = (
        <InputControl
          label={"Provide Details"}
          id={"provideDetails"}
          value={this.state.details}
          onChange={this.handleControlChange}
        />
      );
    }
    return (
      <div className="container">
        <form id="myForm" className="needs-validation" noValidate>
          <DropDown
            label={"Store Type"}
            id={"storeType"}
            placeholder="Please Select"
            options={this.state.storeTypeList}
            onChange={this.handleControlChange}
            value={this.state.storeType}
            required={true}
          />

          {provideDetails}

          <Autocomplete
            label={"User Lookup"}
            onChange={this.handleChangeAutocomplete}
            options={this.state.userList}
            selected={this.state.selectedUser}
          />
          <InputControl
            label={"First Name"}
            id={"firstName"}
            type={"text"}
            value={this.state.firstName}
            onChange={this.handleControlChange}
            required={true}
          />
          <InputControl
            label={"Last Name"}
            id={"lastName"}
            type={"text"}
            value={this.state.lastName}
            onChange={this.handleControlChange}
            required={true}
          />

          <Buttons
            labelPrimary={"Next"}
            onPrimaryClick={this.handleNextClick}
          />
        </form>
      </div>
    );
  }
}

export default FirstPage;
