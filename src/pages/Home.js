import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to Stack Track Lab</p>
      <Link to="/tasks">View Tasks</Link>
    </div>
  );
}

export default Home;
