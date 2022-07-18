import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ onOpenMenu, onOpenPopupSearch, isOpenPopupMenu, isOpenPopupSearch,  onClosePopup }) {
  return (
    <>
      <Header
        onOpenMenu={onOpenMenu}
        onOpenPopupSearch={onOpenPopupSearch}
        isOpenPopupMenu={isOpenPopupMenu}
        isOpenPopupSearch={isOpenPopupSearch}
        onClosePopup={onClosePopup}
      />

      <div className='main'>
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default Layout;
