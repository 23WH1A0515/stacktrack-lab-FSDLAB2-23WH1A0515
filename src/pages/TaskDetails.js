import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../api/client";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": "23WH1A0515"
      }
    })
      .then(res => res.json())
      .then(data => setTask(data));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default TaskDetails;
