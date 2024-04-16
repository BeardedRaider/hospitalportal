import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';    
import '../../styles/navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

  return (
    
      <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} alt='LOGO' />
            <div className='hiddenLinks'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                {/* <Link to='/parent'>Parent</Link>
                <Link to='/patient'>Patient</Link>
                <Link to='/games'>Games</Link> */}
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            {/* <Link to='/parent'>Parent</Link>
            <Link to='/patient'>Patient</Link>
            <Link to='/games'>Games</Link> */}
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
        <footer />
      </div>
    
  )
}

export default Navbar
