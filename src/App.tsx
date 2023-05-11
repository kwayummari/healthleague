import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
