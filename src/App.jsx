
import React, { useState } from "react";

function App() {

  const [marks, setMarks] = useState("");
  const [result, setResult] = useState(false);

  const total = 100;

  const percentage = (marks / total) * 100;

  let grade;

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  function calculateResult() {
    if (marks === "" || marks < 0 || marks > 100) {
      alert("Enter marks between 0 and 100");
      return;
    }

    setResult(true);
  }

  return (
    <div>
      <h1>Student Result Analysis</h1>

      <input
        type="number"
        placeholder="Enter Marks"
        value={marks}
        onChange={(e) => {
          setMarks(e.target.value);
          setResult(false);
        }}
      />

      <button onClick={calculateResult}>
        Calculate Result
      </button>

      {result && (
        <div>
          <h2>Marks: {marks}</h2>
          <h2>Percentage: {percentage}%</h2>
          <h2>Grade: {grade}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
