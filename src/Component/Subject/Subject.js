import React from "react";

const subject = (props) => {
  return (
    <div>
      <label>
        {props.fname} {props.lname} {props.grade}
      </label>
    </div>
  );
};

export default subject;
