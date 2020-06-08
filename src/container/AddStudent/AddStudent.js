import React, { Component } from "react";
import Navbar from "../../Navigation/Navbar/Navbar";
import Aux from "../../hoc/Aux";
import "./AddStudent.css";
import StudentData from "../../Component/StudentDate/StudentDate";
import axios from "../../axios-student";
import GradesDate from "../../Component/GradesDate/GradesDate";

class AddStudent extends Component {
  state = {
    studentData: {
      firstName: "",
      lastName: "",
      studentId: "",
      mathsGrade: "",
      biologyGrade: "",
      historyGrade: "",
      englishGrade: "",
    },
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  dateHandler = (event) => {
    event.preventDefault();
    const data = {
      studentName: this.state.firstName,
      studentSurName: this.state.lastName,
      Id: this.state.studentId,
      Match: this.state.mathsGrade,
      History: this.state.historyGrade,
      Biology: this.state.biologyGrade,
      English: this.state.englishGrade,
    };
    axios.post("/addStudent.json", { data }).then((res) => {
      console.log(res);
      console.log(res.data);
      this.setState({
        firstName: "",
        lastName: "",
        studentId: "",
        mathsGrade: "",
        biologyGrade: "",
        historyGrade: "",
        englishGrade: "",
      });
    });
  };
  render() {
    return (
      <Aux>
        <Navbar />
        <div className="">
          <form onSubmit={this.dateHandler} className="AddStudent">
            <label>Personal date:</label>
            <StudentData
              fName={this.state.firstName}
              lName={this.state.lastName}
              sId={this.state.studentId}
              onChange={this.handleChange}
            />
            <label>Grades date:</label>
            <br />
            <label>
              <GradesDate
                mathsGrade={this.state.mathsGrade}
                biologyGrade={this.state.biologyGrade}
                historyGrade={this.state.historyGrade}
                englishGrade={this.state.englishGrade}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit"> Add </button>
          </form>
        </div>
      </Aux>
    );
  }
}

export default AddStudent;
