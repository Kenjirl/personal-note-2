import React from "react";
import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";

function ButtonDelete({ onDelete }) {
  return(
    <button onClick={onDelete} className="btn-item" title="hapus"><MdDeleteOutline /></button>
  )
}

ButtonDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

export default ButtonDelete;
