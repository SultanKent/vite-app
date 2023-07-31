import React, { useEffect, useState } from 'react'
import './Menu.scss'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'auto';
        }
      }, [isOpen]);
  return (
    <div className="Menu">
        <div className="Menu_main">
            <h2>NanoCard</h2>
            {window.innerWidth > 760 ? (
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            ) : (
          <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            <div className="burger-icon" onClick={handleToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
            <div className="menu-items">
            <ul className='Menu-content'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
          </div>
            )}
        </div>
    </div>
  )
}

export default Menu