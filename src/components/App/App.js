import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import PopupSearch from '../PopupSearch/PopupSearch';
import Genges from '../Genges/Genges';

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
    <div className="page">
      <Header
        onOpenMenu={handleClickMenu}
        onOpenPopupSearch={handleClickSearch}
        isOpenPopupMenu={isOpenPopupMenu}
        isOpenPopupSearch={isOpenPopupSearch}
      />
      <div className="main">
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/genge" element={<Genges />} />

        </Routes>
      </div>
      <Footer />

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
