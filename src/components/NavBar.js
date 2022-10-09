import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FiHome, FiArchive, FiLogOut } from "react-icons/fi"
import LocaleContext from "../contexts/LocaleContext";

function Navbar({ logout }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <>
      <h1>{locale === "id" ? "Catatan" : "Notes"}</h1>
      <ul className="page-nav">
          <Link to="/" className="btn-item" 
            title={locale === "id" ? "halaman utama" : "home"}>
              <li><FiHome /></li>
          </Link>
          <Link to="/archive" className="btn-item" 
            title={locale === "id" ? "arsip" : "archive"}>
              <li><FiArchive /></li>
          </Link>
          <button onClick={logout} className="btn-item" 
            title={locale === "id" ? "keluar" : "log out"}>
              <li><FiLogOut /></li>
          </button>
      </ul>
    </>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navbar;
