import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn } from "react-icons/bi";
import LocaleContext from "../contexts/LocaleContext";

function ButtonArchive({ onArchive }) {
  const { locale } = React.useContext(LocaleContext);
  return(
    <button onClick={onArchive} className="btn-item" 
      title={locale === "id" ? "arsipkan" : "archive"} >
      <BiArchiveIn />
    </button>
  )
}

ButtonArchive.propTypes = {
  onArchive: PropTypes.func.isRequired,
}

export default ButtonArchive;
