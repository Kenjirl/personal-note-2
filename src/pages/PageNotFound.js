import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <span>404</span>
      <p>Halaman yang Anda cari tidak ditemukan</p>
      <Link to="/" className="btn-item" title="kembali ke home">Kembali ke home</Link>
    </div>
  )
}

export default PageNotFound;
