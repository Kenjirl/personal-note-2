import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonActivate from "../components/ButtonActivate";
import ButtonArchive from "../components/ButtonArchive";
import ButtonDelete from "../components/ButtonDelete";
import NoteDetail from "../components/NoteDetail";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
import PageNotFound from "./PageNotFound";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = React.useState([]);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    })
  }, [id]);

  function onDeleteHandler() {
    const isArchive = note.archived;
    deleteNote(note.id);

    if (isArchive) {
      navigate("/archive");
    } else {
      navigate("/");
    }
  }

  function onArchiveHandler() {
    archiveNote(note.id);
    navigate("/");
  }
  
  function onActivateHandler() {
    unarchiveNote(note.id);
    navigate("/archive");
  }

  if (note) {
    return (
    <>
      <NoteDetail
        title={note.title} 
        date={note.createdAt} 
        body={note.body} 
      />

      <div className="action-buttons">
        {
          note.archived
          ? <ButtonActivate onActivate={onActivateHandler} />
          : <ButtonArchive onArchive={onArchiveHandler} />
        }
        <ButtonDelete onDelete={onDeleteHandler} />
      </div>
    </>
    )
  } else {
    return (
      <PageNotFound />
    )
  }
}

export default DetailPage;