import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Layout(props) {
  const { onOpenMenu, isOpenPopupMenu, onClosePopup, onSearch } = props;
  return (
    <>
      <Header
        onOpenMenu={onOpenMenu}
        isOpenPopupMenu={isOpenPopupMenu}
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
  );
}

export default Layout;
