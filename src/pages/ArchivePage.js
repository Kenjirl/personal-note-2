import React from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="notes-list__title">Catatan Arsip</h2>
        <NotesList notes={this.state.notes} />
      </React.Fragment>
    )
  }
}

export default ArchivePage;
