import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import PopupMenu from '../PopupMenu/PopupMenu';
import PopupSearch from '../PopupSearch/PopupSearch';
import Genges from '../Genges/Genges';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';


function App() {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = React.useState(false);
  const [isOpenPopupSearch, setIsOpenPopupSearch] = React.useState(false);

  function handleClickMenu() {
    setIsOpenPopupMenu(true)
  }

  function handleClickSearch() {
    setIsOpenPopupSearch(true)
  }

  function handleClosePopup() {
    setIsOpenPopupMenu(false)
    setIsOpenPopupSearch(false)
    console.log('eee')
  }

  return (
    <div className='page'>

      <Routes>
        <Route path='/' element={<Layout
          onOpenMenu={handleClickMenu}
          onOpenPopupSearch={handleClickSearch}
          isOpenPopupMenu={isOpenPopupMenu}
          isOpenPopupSearch={isOpenPopupSearch}
          onClosePopup={handleClosePopup}
        />}>
          <Route index element={<Main />} />
          <Route path='genre' element={<Genges />} />
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
