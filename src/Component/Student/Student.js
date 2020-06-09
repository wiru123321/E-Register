import React, { Component } from "react";
import "./Student.css";
import { Button } from "react-bootstrap";

class Student extends Component {
  state = {
    show: false,
  };
  showHandler = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="Student">
        <p>Name: {this.props.fname}</p>
        <p>Last Name: {this.props.lname}</p>
        <p>Student ID: {this.props.sId}</p>
        <Button onClick={this.showHandler} id={this.props.sId}>
          Show More
        </Button>
        {this.state.show && this.props.bgcClicked ? (
          <div className="Modal">
            <p>{this.props.fname}</p>
            <p>{this.props.lname}</p>
            <p>{this.props.sId}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Student;
