import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Scroll'; // ✅ import vào
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop /> {/* ✅ Auto scroll lên đầu */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
