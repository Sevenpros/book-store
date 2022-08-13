import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Navbar from './components/NavBar';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/about" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
