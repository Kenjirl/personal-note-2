import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NotesList({ notes }) {
  if (notes.length) {
    return (
      <div className="notes-list">
      {
        notes.map((note) => (
            <NoteItem key={note.id} id={note.id} {...note} />
        ))
      }
      </div>
    )
  }
  else {
    return (
      <div className="notes-list__empty-message">Tidak ada catatan</div>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList;
