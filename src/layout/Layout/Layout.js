import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Layout(props) {
  const { onOpenMenu, onClosePopup } = props;
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
