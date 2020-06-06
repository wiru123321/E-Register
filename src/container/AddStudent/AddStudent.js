import React, { Component } from "react";
import Navbar from "../../Navigation/Navbar/Navbar";
import Aux from "../../hoc/Aux";
import 

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Name",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Aux>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <input value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit name" />
        </form>
      </Aux>
    );
  }
}

export default AddStudent;
