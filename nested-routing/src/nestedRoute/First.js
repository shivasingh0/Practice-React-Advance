import React from "react";
import { Link, Outlet } from "react-router-dom";

function First() {
  return (
    <div>
      <h1>First</h1>
      <Link to="seconduser">Go to second</Link> <br />
      <Link to="/firstuser/seconduser/thirduser/hello">Go to hello</Link> <br />
      <Outlet />
    </div>
  );
}

export default First;
