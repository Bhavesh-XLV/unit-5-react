import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: "50px" }}>
        Home
      </Link>
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default Navbar;
