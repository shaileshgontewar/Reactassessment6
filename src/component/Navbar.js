import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Student" style={{ textDecoration: "none" }}>
              Student
            </Link>
          </li>

          <li>
            <Link to="/Contact" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
