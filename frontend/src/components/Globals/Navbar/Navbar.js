import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo
} from './NavbarStyled';
import NetflixLogo from '../../../assets/icon-netflix.png';

const Navbar = () => {
  const [blackNavbar, setBlackNavbar] = useState(false);

  useEffect(() => {
    const observerNavbarScroll = () => {
      if(window.scrollY > 20) {
        setBlackNavbar(true);
      } else {
        setBlackNavbar(false);
      }
    };

    window.addEventListener('scroll', observerNavbarScroll);

    return () => {
      window.removeEventListener('scroll', observerNavbarScroll);
    };
  }, []);
  
  return (
    <NavbarContainer blackNavbar={ blackNavbar } className={ blackNavbar ? 'black' : '' }>
      <NavbarContent>
        <NavbarLogo>
          <Link to="/">
            <img src={NetflixLogo} alt="Netflix" />
          </Link>
        </NavbarLogo>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;