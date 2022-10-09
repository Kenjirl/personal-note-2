import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import LocaleContext from "../contexts/LocaleContext";

function NoteItem({ id, title, body, createdAt }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div id={id} className="note-item">
      <Link to={`/notes/${id}`} className="note-item__title"><h3>{title}</h3></Link>
      <span className="note-item__date">
        {showFormattedDate(createdAt, locale)}
      </span>
      <p className="note-item__body">{body}</p>
    </div>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItem;
