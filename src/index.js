import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './App';
import store from './components/store';
import PostBox from './components/PostBox.js'
import Responses from './components/Responses.js'

import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <main className="container">
        <h1>Fun with AI!</h1>
        <PostBox />
      </main>
      <Responses></Responses>
    </Provider>
  </React.StrictMode>
);