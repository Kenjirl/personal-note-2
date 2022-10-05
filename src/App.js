import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <header className="note-app__header">
        <Navbar />
      </header>
      <main className="note-app__body">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/archive' element={<ArchivePage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
