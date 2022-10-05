import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonActivate from '../components/ButtonActivate';
import ButtonArchive from '../components/ButtonArchive';
import ButtonDelete from '../components/ButtonDelete';
import { showFormattedDate } from '../utils';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import PageNotFound from './PageNotFound';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActivateHandler = this.onActivateHandler.bind(this);
  }

  onDeleteHandler() {
    const isArchive = this.state.note.archived;
    deleteNote(this.state.note.id);

    if (isArchive) {
      this.props.navigate('/archive');
    } else {
      this.props.navigate('/');
    }
  }

  onArchiveHandler() {
    archiveNote(this.state.note.id);

    this.props.navigate('/archive');
  }

  onActivateHandler() {
    unarchiveNote(this.state.note.id);

    this.props.navigate('/');
  }

  render() {
    if (this.state.note) {
      return (
      <>
        <div className='note-detail'>
          <h3>{this.state.note.title}</h3>
          <span>{showFormattedDate(this.state.note.createdAt)}</span>
          <p>{this.state.note.body}</p>
        </div>

        <div className='action-buttons'>
          {
            this.state.note.archived
            ? <ButtonActivate onActivate={this.onActivateHandler} />
            : <ButtonArchive onArchive={this.onArchiveHandler} />
          }
          <ButtonDelete onDelete={this.onDeleteHandler} />
        </div>
      </>
      )
    } else {
      return (
        <PageNotFound />
      )
    }
  }
}

export default DetailPageWrapper;
