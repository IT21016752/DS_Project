import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './pages/ItemManagement/AddItem.js';
import AddDeliveryInfo from './pages/DeliveryManagement/addDelInfo';
import Header from './pages/Header.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" />
          <Route path="/additems" element={<AddItem />} />
          <Route path="/AddDelInfo" element={<AddDeliveryInfo />} />
        </Route>
      </Routes>
    </Router>
   
    
  );
  
}

export default App;
