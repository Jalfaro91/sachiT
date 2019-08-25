import React from 'react';
// import logo from './logo.svg';
import logo from './img/logo_transparent.png';
import './App.css';

function App() {
  return (
    <div className="App bg-img">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Pet Stuffs 
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
