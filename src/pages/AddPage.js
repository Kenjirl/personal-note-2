import React from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import { addNote } from "../utils/local-data";

function AddPageWrapper() {
  const navigate = useNavigate();

  return <AddPage navigate={navigate} />
}

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
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

    if (this.state.title === "" || this.state.body === "") {
      alert("Judul atau isi dari Note tidak boleh kosong!")
    }
    else {
      addNote(this.state);
      
      this.setState(() => {
        return {
          title: "",
          body: "",
        }
      })

      this.props.navigate("/");
    }
  }

  render() {
    return (
      <div className="note-input">
          <h2>Buat Catatan</h2>
          <InputForm 
            onSubmit={this.onNoteSubmitHandler} 
            title={this.state.title} 
            body={this.state.body} 
            onTitleChange={this.onTitleChangeHandler}
            onBodyChange={this.onBodyChangeHandler}
          />
      </div>
    )
  }
}

export default AddPageWrapper;
