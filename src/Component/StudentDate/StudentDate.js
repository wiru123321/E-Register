import React from "react";

const studentDate = (props) => {
  return (
    <div>
      <input
        name="firstName"
        value={props.fName}
        onChange={props.onChange}
        placeholder="Name"
        type="text"
        required
      />
      <input
        name="lastName"
        value={props.lName}
        onChange={props.onChange}
        placeholder="Surname"
        type="text"
        required
      />
      <input
        name="studentId"
        value={props.sId}
        onChange={props.onChange}
        placeholder="Student Id"
        type="number"
        required
      />
    </div>
  );
};

export default studentDate;
