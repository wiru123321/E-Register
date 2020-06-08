import React from "react";

const gradesDate = (props) => {
  return (
    <div>
      <label>Match:</label>
      <input
        name="mathsGrade"
        value={props.mathsGrade}
        onChange={props.onChange}
        placeholder="Grade"
        required
      />
      <br />
      <label>Biology:</label>
      <input
        name="biologyGrade"
        value={props.biologyGrade}
        onChange={props.onChange}
        placeholder="Grade"
        required
      />
      <br />
      <label>History:</label>
      <input
        name="historyGrade"
        value={props.historyGrade}
        onChange={props.onChange}
        placeholder="Grade"
        required
      />
      <br />
      <label>English:</label>
      <input
        name="englishGrade"
        value={props.englishGrade}
        onChange={props.onChange}
        placeholder="Grade"
        required
      />
    </div>
  );
};

export default gradesDate;
