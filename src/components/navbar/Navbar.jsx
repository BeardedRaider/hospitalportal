import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = ({ className, isDesktop}) => {   // Navbar component
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [parent, setParent] = useState(localStorage.getItem('parent') === 'true');

  const handleLogout = () => {// Logout function
    localStorage.removeItem('token');// Remove the token from the local storage
    setToken(null); // Update the state
    navigate('/');// Redirect to the home page
  };

  
  // Listen for changes in the local storage
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
      setParent(localStorage.getItem('parent') === 'true');
    };

    // Attach the event listener
    window.addEventListener('storage', handleStorageChange);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

    // Log the changes in token and parent state
  useEffect(() => {
    console.log('Token has changed:', token);
    console.log('Parents click here:', parent);
  }, [token, parent]);

  return (
    <div className={`navbar ${className}`}>
      <div>
        <img  className="logo" src={process.env.PUBLIC_URL + '/images/logoWITHheart.png'} alt='Rainbow Medical' />
        </div>
        <div>
        <ul>
          {isDesktop ? (
          <>
            <li><Link to="https://www.nhsinform.scot/" target='_blank'>NHS Inform</Link></li>
          </>
          ) : token ? ( //if logged in
            <>
                {parent ? ( //if parent
                <>
                  <li><Link to="/parent">Dashboard</Link></li>
                  <li><Link to="/appointments">Childs Appointment</Link></li>
                  <li><Link to="https://www.nhsinform.scot/" target='_blank'>NHS Inform</Link></li>
                  <li><button className='logoutBtn'logoutBtn onClick={handleLogout}>Logout</button></li>
                </>
                ) : ( //if not parent
                <>
                  <li><Link to="/patient">Home</Link></li>
                  <li><Link to="/appointment">Appointments</Link></li>
                  <li><Link to="/games">Entertainment</Link></li>
                  <li><button className='logoutBtn'logoutBtn onClick={handleLogout}>Logout</button></li>
                </>
                )}
                
            </>
            ) : ( //if not logged in
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="https://www.nhsinform.scot/" target='_blank'>NHS Inform</Link></li>   
              <li><Link className='logoutBtn' to="/login">Login</Link></li>
            </>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
