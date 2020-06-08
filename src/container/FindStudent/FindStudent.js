import React, { Component } from "react";

import axios from "../../axios-student";
import Student from "../../Component/Student/Student";
import Navbar from "../../Navigation/Navbar/Navbar";
import "./FindStudent.css";
class FindStudent extends Component {
  state = {
    students: [],
    searchingName: "",
    nameToFind: "",
  };

  handleChange = (event) => {
    this.setState({ searchingName: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({ nameToFind: this.state.searchingName });
    event.preventDefault();
  };

  componentDidMount() {
    axios
      .get("/addStudent.json")
      .then((res) => {
        const fetchedStudents = [];
        for (let key in res.data) {
          fetchedStudents.push({
            ...res.data[key],
            Idi: key,
          });
        }
        this.setState({ students: fetchedStudents });
      })
      .catch((err) => {});
  }
  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit} className="FindStudent">
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.students.map((student) =>
          student.data.studentName === this.state.nameToFind ? (
            <Student
              sId={student.data.Id}
              fname={student.data.studentName}
              lname={student.data.studentSurName}
            />
          ) : null
        )}
      </div>
    );
  }
}

export default FindStudent;
