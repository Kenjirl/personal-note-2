import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import { FiCheck } from 'react-icons/fi';

function AddPageWrapper() {
  const navigate = useNavigate();

  return <AddPage navigate={navigate} />
}

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onNoteSubmitHandler = this.onNoteSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    })
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onNoteSubmitHandler(event) {
    event.preventDefault();

    if (this.state.title === '' || this.state.body === '') {
      alert('Judul atau isi dari Note tidak boleh kosong!')
    }
    else {
      addNote(this.state);
      
      this.setState(() => {
        return {
          title: '',
          body: '',
        }
      })
    }

    this.props.navigate('/');
  }

  render() {
    return (
      <div className="note-input">
          <h2>Buat Catatan</h2>

        <form className="note-input__body" onSubmit={this.onNoteSubmitHandler} >
          <input type="text" placeholder="masukkan judul catatan" value={this.state.title} onChange={this.onTitleChangeHandler} onKeyDown={this.handleTitleKeyDown} autoComplete="false" autoFocus />
          <textarea cols="30" rows="10" placeholder="masukkan catatanmu ..." value={this.state.body} onChange={this.onBodyChangeHandler} />
          <button className='btn-item' title='submit' type="submit"><FiCheck className='flex-center' /></button>
        </form>
      </div>
    )
  }
}

export default AddPageWrapper;
