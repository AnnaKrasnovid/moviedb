import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ onOpenMenu, onOpenPopupSearch, isOpenPopupMenu, isOpenPopupSearch, onClosePopup, onSearch }) {
  return (
    <>
      <Header
        onOpenMenu={onOpenMenu}
        onOpenPopupSearch={onOpenPopupSearch}
        isOpenPopupMenu={isOpenPopupMenu}
        isOpenPopupSearch={isOpenPopupSearch}
        onClosePopup={onClosePopup}
        onSearch={onSearch}
      />
      <div className='main'>
        <main className='main-page'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout;
