import React, {useState} from 'react';
import { ReactComponent as CompanyLogo } from '../../logoTest(willReplace).svg';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import MenuIcon from '../Menu/MenuIcon';
import SidePage from '../Menu/SidePage';


const Navbar = () => {
    const [showSidePage, setShowSidePage] = useState(false);

    const clickMenuIcon = () => {setShowSidePage( !showSidePage )}

    return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <CompanyLogo />
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
          </ul>
        </div>
          <MenuIcon onClick={clickMenuIcon}/>
          <SidePage 
            isOpen={showSidePage}
            onClick={clickMenuIcon}
          />
      </div>
    </nav>
  )
}



export default Navbar;