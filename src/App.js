import React from 'react';
import './App.css';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/navBar';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
