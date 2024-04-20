// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import DesktopWarning from './components/pages/shared/DesktopWarning';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";// Importing routing components from react-router-dom

import "./App.css"; // Importing the CSS for the App component
import Navbar from "./components/navbar/Navbar"; // Importing the Navbar component
import Home from "./components/pages/shared/Home"; // Importing the Home component
import Login from "./components/pages/shared/Login"; // Importing the Login component
import Parent from "./components/pages/parent/Parent"; // Importing the Parent component
import Patient from "./components/pages/patient/Patient"; // Importing the Patient component
import Games from "./components/pages/patient/Games"; // Importing the Games component
import Register from "./components/pages/shared/Register"; // Importing the Register component
import Test from "./components/pages/shared/Test"; // Importing the Test component
import Appointments from './components/pages/shared/Appointments';

// Defining the App component

function App() {
  
  // The App component returns a Router component that wraps a Navbar component and a Routes component.
  // The Routes component contains several Route components, each of which renders a different component based on the current URL path.

  const [scrolled, setScrolled] = useState(false);//state for navbar


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // cleanup
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  return (
    <div className="App">
            <DesktopWarning />
      <Router>
      <Navbar className={scrolled ? 'scrolled' : ''} />
        <Routes>
          {/* components are rendered when the URL path is exactly */}
          
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/games" element={<Games />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Router>
    </div>
  );
}

// Exporting the App component so it can be imported and used in other files
export default App;
