import React from 'react';
import { Link } from "react-router-dom";

const STUDENT_ID = '23WH1A0515';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>

      {/*Updated Link */}
      <Link to="/tasks">Go to Tasks Page</Link>
    </div>
  );
}

export default Home;