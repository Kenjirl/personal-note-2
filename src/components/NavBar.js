import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiArchive } from "react-icons/fi"

function Navbar() {
  return (
    <>
      <h1>Notes</h1>

      <ul className="page-nav">
          <Link to="/" className="btn-item" title="Home"><li><FiHome /></li></Link>
          <Link to="/archive" className="btn-item" title="Arsipan"><li><FiArchive /></li></Link>
      </ul>
    </>
  )
}

export default Navbar;
