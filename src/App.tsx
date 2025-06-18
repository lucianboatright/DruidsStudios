import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Builds from './pages/Builds/Builds';
import Hire from './pages/HirePage/HirePage';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      {/* <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <nav>
          <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
          <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
          <Link to="/builds" style={{ margin: '0 1rem' }}>Builds</Link>
          <Link to="/hire" style={{ margin: '0 1rem' }}>Hire</Link>
        </nav>
      </header> */}
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;
