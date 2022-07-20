import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import PopupMenu from '../PopupMenu/PopupMenu';
import PopupSearch from '../PopupSearch/PopupSearch';
import Genres from '../Genres/Genres';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';
import MoviePage from '../MoviePage/MoviePage';
import MoviesList from '../MoviesList/MoviesList';

function App() {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = React.useState(false);
  const [isOpenPopupSearch, setIsOpenPopupSearch] = React.useState(false);

  //onSearch={handleSearch}
  const [isSearchQuery, setIsSearchQuery] = React.useState(false);

  function handleClickMenu() {
    setIsOpenPopupMenu(true);
  }

  function handleClickSearch() {
    setIsOpenPopupSearch(true);
  }

  function handleClosePopup() {
    setIsOpenPopupMenu(false);
    setIsOpenPopupSearch(false);
  }

  function handleSearch(e) {
    e.preventDefault();
    setIsSearchQuery(true)
  }

  return (
    <div className='page'>

      <Routes>
        <Route path='/' element={<Layout
          onOpenMenu={handleClickMenu}
          onOpenPopupSearch={handleClickSearch}
          isOpenPopupMenu={isOpenPopupMenu}
          isOpenPopupSearch={isOpenPopupSearch}

          onSearch={handleSearch}
        />}>
          <Route index element={<Main />} />
          <Route path='movies'element={<MoviesList />}  />
          <Route path='genre' element={<Genres />} />
          <Route path='movie' element={<MoviePage />} />


          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

      <PopupMenu
        onClosePopup={handleClosePopup}
        isOpenPopupMenu={isOpenPopupMenu}
      />
      <PopupSearch
        onClosePopup={handleClosePopup}
        isOpenPopupSearch={isOpenPopupSearch}
      />
    </div>
  )
}

export default App;
