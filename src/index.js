import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PhonebookProvider from './Components/Context/Context';
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PhonebookProvider>
    <App />
    </PhonebookProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


