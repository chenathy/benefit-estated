import React, {useState} from 'react';
import compnanyLogo from '../../bestated_logo.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import MenuIcon from '../Menu/MenuIcon';
import SidePage from '../Menu/SidePage';


const Navbar = () => {
    const [showSidePage, setShowSidePage] = useState(false);

    const clickMenuIcon = () => {setShowSidePage( !showSidePage )}

    return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
            <NavLink to='/'>
              <img src={compnanyLogo} alt='Logo'/>
            </NavLink>
          </div>
          <div className='nav-elements'>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/contactUs'>Contact Us</NavLink>
              </li>
              <li>
                <MenuIcon onClick={clickMenuIcon}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SidePage 
      isOpen={showSidePage}
      onClick={clickMenuIcon}
      />
    </div>
  )
}



export default Navbar;