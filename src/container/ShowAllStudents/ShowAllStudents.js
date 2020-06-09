import React, { Component } from "react";

import axios from "../../axios-student";
import Student from "../../Component/Student/Student";
import Navbar from "../../Navigation/Navbar/Navbar";
import "./ShowAllStudents.css";
class ShowAllStudents extends Component {
  state = {
    students: [],
    show: false,
    backgroudClicked: false,
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
  backgroudClickHandler = () => {
    this.setState({ backgroudClicked: !this.state.backgroudClicked });
  };
  render() {
    return (
      <div onClick={this.backgroudClickHandler}>
        <div style={{ backgroundColor: "#cefff1", height: "100%" }}>
          <Navbar />
          {this.state.students.map((student) => (
            <div className="StudentCase">
              <Student
                sId={student.data.Id}
                fname={student.data.studentName}
                lname={student.data.studentSurName}
                bgcClicked={this.state.backgroudClicked}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            height: "2vh",
            marginTop: "-20px",
            backgroundColor: "#cefff1",
          }}
        />
      </div>
    );
  }
}

export default ShowAllStudents;
