import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';


const SidePage = ({ isOpen, ...props }) => {
  return (
    <div className={`side-page ${isOpen ? 'open' : ''}`} onClick={props.onClick}>
      <ul>
          <li>
            <NavLink to='/employees'>For Emoployees</NavLink>
          </li>
          <li>
            <NavLink to='/employers'>For Employers</NavLink>
          </li>
          <li>
            <NavLink to='/attorneys'>For Attorneys</NavLink>
          </li>
      </ul>
    </div>
  );
};

export default SidePage;