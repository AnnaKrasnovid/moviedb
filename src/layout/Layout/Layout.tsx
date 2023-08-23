import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Layout.css';

interface LayoutInt {
  onOpenMenu: () => void,
  onClosePopup: () => void,
}

function Layout({ onOpenMenu, onClosePopup }: LayoutInt) {

  return (
    <>
      <Header
        onOpenMenu={onOpenMenu}
        onClosePopup={onClosePopup}
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
