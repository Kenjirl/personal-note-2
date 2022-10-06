import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";

function InputForm({ onSubmit, title, body, onTitleChange, onBodyChange }) {
  return (
    <form className="note-input__body" onSubmit={onSubmit} >
      <input type="text" placeholder="masukkan judul catatan" value={title} onChange={onTitleChange} autoComplete="false" autoFocus />
      <textarea cols="30" rows="10" placeholder="masukkan catatanmu ..." value={body} onChange={onBodyChange} />
      <button className="btn-item" title="submit" type="submit"><FiCheck className="flex-center" /></button>
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