import React, { Component } from "react";

import axios from "../../axios-student";
import Subject from "../../Component/Subject/Subject";
import Navbar from "../../Navigation/Navbar/Navbar";
import "./ShowSubject.css";
class ShowSubject extends Component {
  state = {
    students: [],
    searchingName: "",
    math: "",
  };

  componentDidMount() {
    axios
      .get("/addStudent.json")
      .then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push({
            ...res.data[key],
            Idi: key,
          });
        }
        this.setState({ students: fetchedData });
      })
      .catch((err) => {});
  }
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className="ShowSubject">
            <label>Maths</label>
            {this.state.students.map((student) => (
              <Subject
                fname={student.data.studentName}
                lname={student.data.studentSurName}
                grade={student.data.Math}
              />
            ))}
          </div>
          <div className="ShowSubject">
            <label>History</label>
            {this.state.students.map((student) => (
              <Subject
                fname={student.data.studentName}
                lname={student.data.studentSurName}
                grade={student.data.History}
              />
            ))}
          </div>
          <div className="ShowSubject">
            <label>English</label>
            {this.state.students.map((student) => (
              <Subject
                fname={student.data.studentName}
                lname={student.data.studentSurName}
                grade={student.data.English}
              />
            ))}
          </div>
          <div className="ShowSubject">
            <label>Biology</label>
            {this.state.students.map((student) => (
              <Subject
                fname={student.data.studentName}
                lname={student.data.studentSurName}
                grade={student.data.Biology}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowSubject;
