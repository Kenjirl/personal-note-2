import React from "react";
import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";
import LocaleContext from "../contexts/LocaleContext";

function ButtonDelete({ onDelete }) {
  const { locale } = React.useContext(LocaleContext);
  return(
    <button onClick={onDelete} className="btn-item" 
      title={locale === "id" ? "hapus" : "delete"} >
      <MdDeleteOutline />
    </button>
  )
}

ButtonDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

export default ButtonDelete;
