import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { getActiveNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
        <h2 className="notes-list__title">Catatan Aktif</h2>

        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHanlder} />

        <NotesList notes={notes} />

        <Link to="/add" className="add-nav btn-item" title="Tambah"><FiPlus /></Link>
      </React.Fragment>
    )
  }
}

export default HomePageWrapper;
