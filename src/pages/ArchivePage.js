import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onKeywordChangeHanlder = this.onKeywordChangeHanlder.bind(this);
  }

  onKeywordChangeHanlder(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <React.Fragment>
        <h2 className="notes-list__title">Catatan Arsip</h2>

        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHanlder} />

        <NotesList notes={notes} />
      </React.Fragment>
    )
  }
}

export default ArchivePageWrapper;
