import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/MainPage';
import PopupMenu from '../components/Popup/PopupMenu';
import GenresPage from '../pages/GenresPage';
import NotFoundPage from '../pages/NotFoundPage';
// import Layout from '../components/Layout/Layout';
import Layout from '../layout/Layout/Layout';
import MoviePage from '../pages/MoviePage';
import MoviesPage from '../pages/MoviesPage';

function App() {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = React.useState(false);

  function handleClickMenu() {
    setIsOpenPopupMenu(true);
  }



  function handleClosePopup() {
    setIsOpenPopupMenu(false);
  }

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <div className='page'>

      <Routes>
        <Route path='/' element={<Layout
          onOpenMenu={handleClickMenu}
          isOpenPopupMenu={isOpenPopupMenu}
          onClosePopup={handleClosePopup}
          onSearch={handleSearch}
        />}>
          <Route index element={<Main />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:id' element={<MoviePage />} />

          <Route path='genres' element={<GenresPage />} />
          <Route path='genres/:genre' element={<MoviesPage />} />
          <Route path='genres/:genre/:id' element={<MoviePage />} />
          <Route path='*' element={<NotFoundPage />} />

          {/* <Route index element={<Main />} />
          <Route path={routes.MOVIES} element={<MoviesPage />} />
          <Route path={routes.MOVIE} element={<MoviePage />} />

          <Route path={routes.GENRES} element={<GenresPage />} />
          <Route path={`${routes.GENRES}/:genre`} element={<MoviesPage />} />
          <Route path={`${routes.GENRES}/:genre/:id`} element={<MoviePage />} />
          <Route path='*' element={<NotFoundPage />} /> */}
        </Route>
      </Routes>

      <PopupMenu
        onClosePopup={handleClosePopup}
        isOpenPopupMenu={isOpenPopupMenu}
      />      
    </div>
  );
}

export default App;
