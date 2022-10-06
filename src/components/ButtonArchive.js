import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn } from "react-icons/bi";

function ButtonArchive({ onArchive }) {
  return(
    <button onClick={onArchive} className="btn-item" title="arsipkan"><BiArchiveIn /></button>
  )
}

ButtonArchive.propTypes = {
  onArchive: PropTypes.func.isRequired,
}

export default ButtonArchive;
