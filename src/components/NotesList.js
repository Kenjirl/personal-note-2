import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import LocaleContext from "../contexts/LocaleContext";

function NotesList({ notes }) {
  const { locale } = React.useContext(LocaleContext);

  if (notes.length) {
    return (
      <div className="notes-list">
        {
          notes.map((note) => (
              <NoteItem key={note.id} id={note.id} {...note} 
              />
          ))
        }
      </div>
    )
  }
  else {
    if (locale !== "id") {
      return (
        <div className="notes-list__empty-message">
          No note found
        </div>
      )
    }

    return (
      <div className="notes-list__empty-message">
        Tidak ada catatan
      </div>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList;
