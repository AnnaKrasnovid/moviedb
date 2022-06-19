import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="page">

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App;
