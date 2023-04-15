import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './pages/ItemManagement/AddItem.js';
import Header from './pages/Header.js';
import AllItems from './pages/ItemManagement/AllItems.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" />
          <Route path="/additems" element={<AddItem />} />
          <Route path="/allitems" element={<AllItems />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
