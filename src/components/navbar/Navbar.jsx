import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const [token, setToken] = useState(null);
  const [parent, setParent] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedParent = localStorage.getItem('parent');

    setToken(storedToken);
    setParent(storedParent === 'true');
  }, []);

  useEffect(() => {
    console.log('Token has changed:', token);
    console.log('Parents click here:', parent);
  }, [token, parent]);

  return (
    <div className="navbar">
      <div>
        <img  className="logo" src={process.env.PUBLIC_URL + '/images/health.png'} alt='LOGO' />
        </div>
        <div>
        <ul>
            {token ? (
            <>
                {parent ? (
                <>
                    <li><Link to="/parent">Dashboard</Link></li>
                    <li><Link to="/appointments">Childs Appointment</Link></li>
                </>
                ) : (
                <>
                    <li><Link to="/patient">Home</Link></li>
                    <li><Link to="/appointment">Appointment</Link></li>
                    <li><Link to="/games">Entertainment</Link></li>
                </>
                )}
                <li><button onClick={handleLogout}>Logout</button></li>
            </>
            ) : (
            <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="https://www.nhsinform.scot/" target='_blank'>NHS Inform</Link></li>
                
            </>
            )}
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;
