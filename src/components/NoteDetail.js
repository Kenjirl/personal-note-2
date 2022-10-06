import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteDetail({ title, date, body }) {
  return(
    <div className="note-detail">
      <h3>{title}</h3>
      <span>{showFormattedDate(date)}</span>
      <p>{body}</p>
    </div>
  )
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NoteDetail;