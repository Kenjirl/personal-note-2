import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import LocaleContext from "../contexts/LocaleContext";

function NoteDetail({ title, date, body }) {
  const { locale } = React.useContext(LocaleContext);
  return(
    <div className="note-detail">
      <h3>{title}</h3>
      <span>{showFormattedDate(date, locale)}</span>
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