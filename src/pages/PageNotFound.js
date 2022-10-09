import React from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function PageNotFound() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="page-not-found">
      <span>404</span>
      <p>{locale === "id" ? "Halaman yang Anda cari tidak ditemukan" : "Page Not Found"}</p>
      <Link to="/" className="btn-item" title={locale === "id" ? "halaman utama" : "home"}>
        {locale === "id" ? "Kembali ke Halaman Utama" : "Back to Home"        }
      </Link>
    </div>
  )
}

export default PageNotFound;
