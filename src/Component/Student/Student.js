import React from "react";
import "./Student.css";

const student = (props) => {
  return (
    <div className="Student">
      <p>Name: {props.fname}</p>
      <p>Last Name: {props.lname}</p>
      <p>Student ID: {props.sId}</p>
    </div>
  );
};

export default student;
