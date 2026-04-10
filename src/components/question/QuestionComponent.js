import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuestionComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://bvrithcloud.com/api/tasks", {
      headers: { "x-student-id": "23WH1A0515" }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTasks(Array.isArray(data) ? data : data.data || []);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container"> {/* ✅ fixed */}
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>Loading or No Tasks...</p>
      ) : (
        tasks.map(t => (
          <div key={t.id || t._id}>
            <h3>{t.title}</h3>
            <p>Status: <b>{t.status}</b></p>
            <Link to={`/task/${t.id || t._id}`}>View</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default QuestionComponent;