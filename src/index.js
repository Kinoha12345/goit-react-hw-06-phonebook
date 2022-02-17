import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PhonebookProvider from './Components/Context/Context';

ReactDOM.render(
  <React.StrictMode>
    <PhonebookProvider>
    <App />
    </PhonebookProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


