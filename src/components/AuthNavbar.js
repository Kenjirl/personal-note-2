import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";

function AuthNavbar() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <>
      <h1>{locale === "id" ? "Catatan" : "Notes"}</h1>
      <ul className="page-nav">
          <Link to="/" className="btn-item" 
            title={locale === "id" ? "masuk" : "log in"}>
              <li><FiLogIn /></li>
          </Link>
          <Link to="/register" className="btn-item" 
            title={locale === "id" ? "daftar" : "sign in"}>
              <li><FiUserPlus /></li>
          </Link>
      </ul>
    </>
  )
}

export default AuthNavbar;
