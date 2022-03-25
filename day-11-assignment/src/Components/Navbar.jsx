import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link style={{ marginRight: "100px" }} to="/">
        Home
      </Link>
      <Link style={{ marginRight: "100px" }} to="/todo">
        To-do
      </Link>
    </div>
  );
}
