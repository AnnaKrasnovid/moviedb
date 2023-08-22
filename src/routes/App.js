import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/MainPage';
import MenuMobile from '../components/MenuMobile/MenuMobile';
import GenresPage from '../pages/GenresPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../layout/Layout/Layout';
import MoviePage from '../pages/MoviePage';
import MoviesPage from '../pages/MoviesPage';

import '../assets/styles/pages/Main.scss';

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
          onClosePopup={handleClosePopup}
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

      <MenuMobile
        onClosePopup={handleClosePopup}
        isOpenPopupMenu={isOpenPopupMenu}
      />      
    </div>
  );
}

export default App;
