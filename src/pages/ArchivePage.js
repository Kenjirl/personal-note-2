import React from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/api";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    })
  }, [notes]);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  return(
    <>
      <h2 className="notes-list__title">
        {locale === "id" ? "Catatan Arsip" : "Archive Notes"}
      </h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} />
    </>
  )
}

export default ArchivePage;