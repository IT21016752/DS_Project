import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './pages/ItemManagement/AddItem.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/additems" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
