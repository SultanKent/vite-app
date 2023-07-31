import React, { useRef, useEffect, useState } from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';
import Cart from '../../assets/Cart.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cart_img = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update the top position of the cart image based on the scroll position
    if (cart_img.current) {
      cart_img.current.style.top = `${scrollPosition}px`;
    }
  }, [scrollPosition]);

  return (
    <div className="Header">
      <Menu />
      <div className="Header_main">
        <div className="Header_content1">
          <h1>Spend your crypto right from your personal wallet</h1>
          <p>Card designed for all your needs to help you manage your spendings and reinvest money.</p>
          <button>buy this template</button>
          <p>We are in private alpha and accepting new users on a rolling basis.</p>
        </div>
        <div className="Header_content2">
          <img src={Cart} alt="Cart" ref={cart_img} />
        </div>
      </div>
    </div>
  );
};

export default Header;