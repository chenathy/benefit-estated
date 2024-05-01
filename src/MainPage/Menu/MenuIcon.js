import React from 'react';
import './Menu.css';

const MenuIcon = ({onClick}) => {
    return (
        <div className="Hamburge" 
            onClick={onClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
      );
}

export default MenuIcon;