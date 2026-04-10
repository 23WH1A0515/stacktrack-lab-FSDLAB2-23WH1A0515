import React, { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://bvrithcloud.com/api/tasks/${id}`, {
      headers: { "x-student-id": "23WH1A0515" }
    })
      .then(res => res.json())
      .then(data => {
        setTask(data);
      });
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="container"> {/* fixed */}
      <button onClick={() => window.history.back()}>
        ⬅ Back
      </button>

      <h2>{task.title}</h2>
      <p>Status: {task.status}</p>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskDetails;