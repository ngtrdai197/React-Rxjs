import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

import { fetchUsers } from './services';
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => fetchUsers()}>Send</button>
        <Contact />
      </header>
    </div>
  );
}
