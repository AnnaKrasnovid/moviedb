import './App.css';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  return (

    <div className="page">
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>


  )
}

export default App;
