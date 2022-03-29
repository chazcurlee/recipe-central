import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from './components/Home';
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import Snack from './components/Snack'
import Entry from './components/Entry'
import ChefsPage from './components/ChefsPage';

function App() {
  return (
    <div className="App">

      <h1 className="title" >Recipe Central</h1>

      <header  >
        <Nav />
      </header>
      

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
          <Route path="snack" element={<Snack />} />
          <Route path="recipe-entry" element={<Entry />} />
          <Route path="chefs-page" element={<ChefsPage />} /> 
        </Routes>
      </main>
     
    </div>
  );
}

export default App;
