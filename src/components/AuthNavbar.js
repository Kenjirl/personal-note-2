import React from "react";
import { useLocation } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";

function AuthNavbar() {
  const { locale } = React.useContext(LocaleContext);
  const location = useLocation();

  return (
    <>
      <h1>{locale === "id" ? "Catatan" : "Notes"}</h1>
      <ul className="page-nav">
        { 
          location.pathname === "/register"
          ? <WavyLink to="/" title={locale === "id" ? "masuk" : "log in"}>
              <li className="btn-item" ><FiLogIn /></li>
          </WavyLink>

          : <WavyLink to="/register" title={locale === "id" ? "daftar" : "sign in"}>
              <li className="btn-item" ><FiUserPlus /></li>
          </WavyLink>
        }
      </ul>
    </>
  )
}

export default AuthNavbar;
