import React from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import { addNote } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function AddPage(){
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const { locale } = React.useContext(LocaleContext);

  function onTitleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function onBodyChangeHandler(event) {
    setBody(event.target.value);
  }

  function onNoteSubmitHandler(event) {
    event.preventDefault();
    addNote({title, body});
    setTitle("");
    setBody("");
    navigate("/");
  }

  return(
    <div className="note-input">
        <h2>{locale === "id" ? "Buat Catatan" : "Add New Note"}</h2>
        <InputForm onSubmit={onNoteSubmitHandler} title={title} body={body} onTitleChange={onTitleChangeHandler} onBodyChange={onBodyChangeHandler} />
    </div>
  )
}

export default AddPage;
