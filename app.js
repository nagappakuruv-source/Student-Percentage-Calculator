
import React from "react";

function App() {

  const marks = 80;
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

  return (
    <div>
      <h1>Student Result Analysis</h1>
      <h2>Marks: {marks}</h2>
      <h2>Percentage: {percentage}%</h2>
      <h2>Grade: {grade}</h2>
    </div>
  );
}

export default App;


