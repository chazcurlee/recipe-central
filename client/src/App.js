import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from './components/Home';
import Recipes from './components/Recipes'
import Entry from './components/Entry'
import ChefsPage from './components/ChefsPage';
import RecipeDetail from './components/RecipeDetail'

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
          <Route path="/recipe" element={<Recipes />} />
          
          <Route path="recipe-entry" element={<Entry />} />
          <Route path="chefs-page" element={<ChefsPage />} /> 
          <Route path="recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
     
    </div>
  );
}

export default App;
