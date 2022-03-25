import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/" style={{ marginRight: "50px" }}>
        Home
      </Link>
      <Link to="/products">Product</Link>
    </div>
  );
}
