import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);
  return(
    <div className="search-bar">
      <input type="text" 
        placeholder={locale === "id" ? "cari judul ..." : "search note ..."}
        value={keyword} 
        onChange={(event) => keywordChange(event.target.value)} 
      />
    </div>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;