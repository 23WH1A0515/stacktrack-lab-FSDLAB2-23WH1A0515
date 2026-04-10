import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuestionComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": "23WH1A0515"
      }
    })
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.map(task => (
        <div key={task._id} style={{ marginBottom: "20px" }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          <Link to={`/task/${task._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default QuestionComponent;
