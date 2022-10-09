import React from "react";
import PropTypes from "prop-types";
import { BiArchiveOut } from "react-icons/bi";
import LocaleContext from "../contexts/LocaleContext";

function ButtonActivate({ onActivate }) {
  const { locale } = React.useContext(LocaleContext);
  return(
    <button onClick={onActivate} className="btn-item" 
      title={locale === "id" ? "aktifkan" : "activate"} >
      <BiArchiveOut />
    </button>
  )
}

ButtonActivate.propType = {
  onActivate: PropTypes.func.isRequired,
}

export default ButtonActivate;
