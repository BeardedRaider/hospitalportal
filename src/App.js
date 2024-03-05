import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/shared/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
