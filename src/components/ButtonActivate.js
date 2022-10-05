import React from "react";
import PropTypes from "prop-types";
import { BiArchiveOut } from 'react-icons/bi';

function ButtonActivate({ onActivate }) {
  return(
    <button onClick={onActivate} className="btn-item" title="aktifkan"><BiArchiveOut /></button>
  )
}

ButtonActivate.propType = {
  onActivate: PropTypes.func.isRequired,
}

export default ButtonActivate;
