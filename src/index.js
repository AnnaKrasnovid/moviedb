import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './routes/App';
import 'normalize.css';
import 'swiper/css/bundle';
import './assets/styles/swiper/swiper.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/moviedb'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
