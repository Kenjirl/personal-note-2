import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";

function InputForm({ onSubmit, title, body, onTitleChange, onBodyChange }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <form className="note-input__body" onSubmit={onSubmit} >
      <input type="text" value={title} onChange={onTitleChange} autoComplete="false" autoFocus required 
        placeholder={locale === "id" ? "judul catatan" : "note title"} />
      <textarea cols="30" rows="10" value={body} onChange={onBodyChange} required 
        placeholder={locale === "id" ? "tulis catatanmu ..." : "write your note ..."} />
      <button className="btn-item" title="Submit" type="submit">
        <FiCheck className="flex-center" />
      </button>
    </form>
  )
}

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired, 
  onTitleChange: PropTypes.func.isRequired, 
  onBodyChange: PropTypes.func.isRequired,
}

export default InputForm;