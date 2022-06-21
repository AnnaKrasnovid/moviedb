import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import PopupSearch from '../PopupSearch/PopupSearch';

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
  }

  return (
    <>
      <Header
        onOpenMenu={handleClickMenu}
        onOpenPopupSearch={handleClickSearch}
        isOpenPopupMenu={isOpenPopupMenu}
        isOpenPopupSearch={isOpenPopupSearch}
      />
<div className="page">
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </div>
      <Footer />
      <PopupMenu
        onClosePopup={handleClosePopup}
        isOpenPopup={isOpenPopupMenu}
      />
      <PopupSearch
        onClosePopup={handleClosePopup}
        isOpenPopup={isOpenPopupSearch}
      />
    </>
  )
}

export default App;
