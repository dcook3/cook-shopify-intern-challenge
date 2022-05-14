import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './App';
import PostBox from './components/PostBox.js'
import Responses from './components/Responses.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className="container">
      <h1>Fun with AI!</h1>
      <PostBox />
      <Responses />
    </main>
  </React.StrictMode>
);