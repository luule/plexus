import React, { Component } from "react";
import InputControl from "./inputControl";
import DropDown from "./dropDown";
import Buttons from "./buttons";
import RadioButton from "./radioButton";
import Process from "./process";

class FinalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRole: "",
      joinDate: "",
      victoriaLocated: "",
      victoriaAddress: "",
      inProcess: false,
      isSuccess: false,
      userRoleList: [
        { id: 1, value: "Dev" },
        { id: 2, value: "Manager" },
        { id: 3, value: "Student" }
      ]
    };

    if (props.location.states && props.location.states.next) {
      this.state = props.location.states.next;
    }
  }

  handleRadioChange = e => {
    this.setState({ victoriaLocated: e.target.value });
  };

  handleSelectChange = e => {
    this.setState({ userRole: e.target.value });
  };

  handleDateChange = e => {
    this.setState({ joinDate: e.target.value });
  };

  handleControlChange = e => {
    switch (e.target.id) {
      case "userRole":
        this.setState({ userRole: e.target.value });
        break;
      case "userJoin":
        this.setState({ joinDate: e.target.value });
        break;
      case "victoriaLocatedYes":
      case "victoriaLocatedNo":
        this.setState({ victoriaLocated: e.target.value });
        break;
      case "victoriaAddress":
        this.setState({ victoriaAddress: e.target.value });
        break;

      default:
        break;
    }
  };

  backToHome = () => {
    this.props.history.push("/");
  };

  handleBackClick = () => {
    this.props.history.push({
      pathname: "/",
      states: {
        previous:
          this.props.location.states && this.props.location.states.previous
            ? this.props.location.states.previous
            : undefined,
        next: this.state
      }
    });
  };

  handleSubmitClick = () => {
    let form = document.getElementById("finalForm");
    if (form.checkValidity() === true) {
      this.setState({ inProcess: true });
      const userData = {
        ...this.props.location.states.previous,
        ...this.state
      };
      console.log(userData);
      const myProxy = "https://cors-anywhere.herokuapp.com/";
      const url = "	http://webhook.site/0514131a-a967-4e57-8e89-5c26c0d82f94";
      fetch(myProxy + url, {
        method: "POST",
        data: JSON.stringify(userData)
      }).then(
        result => {
          this.setState({ isSuccess: true });
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
    }
    form.classList.add("was-validated");
  };

  render() {
    let victoriaLocation;
    if (this.state.victoriaLocated === "YES") {
      victoriaLocation = (
        <InputControl
          label={"Where in Victoria ?"}
          id={"victoriaAddress"}
          required={true}
          value={this.state.victoriaAddress}
          onChange={this.handleControlChange}
        />
      );
    }
    return (
      <div className="col-6 m-5 p-5 my-form">
        <form
          id="finalForm"
          noValidate
          style={{
            display: !this.state.inProcess ? "" : "none"
          }}
        >
          <DropDown
            label={"What is the users role ?"}
            id={"userRole"}
            placeholder="Please Select"
            options={this.state.userRoleList}
            onChange={this.handleControlChange}
            value={this.state.userRole}
            required={false}
          />
          <InputControl
            label={"When did the user first join ?"}
            id={"userJoin"}
            type={"date"}
            value={this.state.joinDate}
            onChange={this.handleControlChange}
            required={true}
          />
          <RadioButton
            label={"Is this person located in Victoria ?"}
            name={"userLocation"}
            onChange={this.handleControlChange}
            value={this.state.victoriaLocated}
            required={true}
          />

          {victoriaLocation}

          <Buttons
            labelPrimary={"Submit"}
            labelSecondary={"Back"}
            onPrimaryClick={this.handleSubmitClick}
            onSecondaryClick={this.handleBackClick}
          />
        </form>
        <div
          style={{
            display: this.state.inProcess ? "" : "none"
          }}
        >
          <Process isSuccess={this.state.isSuccess} onClick={this.backToHome} />
        </div>
      </div>
    );
  }
}

export default FinalPage;
