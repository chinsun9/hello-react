import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/a">PageA</Link>
      <Link to="/b">PageB</Link>
      <Link to="/adsf">404</Link>
    </div>
  );
}

export default Navbar;
