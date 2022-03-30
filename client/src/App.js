import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from './components/Home';
import Recipes from './components/Recipes'
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
          <Route path="/breakfast" element={<Recipes />} />
          {/* <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
          <Route path="snack" element={<Snack />} /> */}
          <Route path="recipe-entry" element={<Entry />} />
          <Route path="chefs-page" element={<ChefsPage />} /> 
        </Routes>
      </main>
     
    </div>
  );
}

export default App;
