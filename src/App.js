import React from 'react';
import DarkTheme from 'react-dark';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <span className="nav-brand">React-Dark</span>
          <span className="theme-btn">
           <span className="theme-btn-text">Toggle Theme </span> <DarkTheme />
          </span>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          React-Dark, Add dark mode to your React App in few simple steps.
        </p>
        <a
          className="App-link"
          href="https://github.com/Awesome-React-Modules/React-Dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          View On GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
