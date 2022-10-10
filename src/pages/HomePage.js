import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { getActiveNotes } from "../utils/api";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
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
        {locale === "id" ? "Catatan Aktif" : "Active Notes"}
      </h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} />
      <Link to="/add" className="add-nav btn-item" 
        title={locale === "id" ? "tambah" : "add"}>
          <FiPlus />
      </Link>
    </>
  )
}

export default HomePage;
