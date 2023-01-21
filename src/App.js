import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home.js'
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="home-div">
      <Header/>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
