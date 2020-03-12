import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MainHeader, Nav } from './styles';
import MenuButton from '../MenuButton';
import LogoHeader from '../../assets/images/logo_header.png';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const opacityValue = pathname === '/' ? 0 : 1;

  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', opacityEffect);
    }

    return () => {
      window.removeEventListener('scroll', opacityEffect);
    }

  }, [location.pathname])

  let prevScrollpos = window.pageYOffset;

  const opacityEffect = () => {
    var currentScrollPos = window.pageYOffset;
    let parentContainer = document.querySelector(".carouselContainer");
    const parentHeight = parentContainer.offsetHeight;
    const headerBackground = document.querySelector(".header-background");

    if (parentHeight === 240) {
      headerBackground.style.opacity = currentScrollPos / 185;
    }
    if (parentHeight < 400) {
      headerBackground.style.opacity = currentScrollPos / 220;
    }
    else if (parentHeight < 600) {
      headerBackground.style.opacity = currentScrollPos / 350;
    }
    else {
      headerBackground.style.opacity = currentScrollPos / 550;
    }
    
    prevScrollpos = currentScrollPos;
  }

  return (
    <MainHeader>
      <div className="container header-container">
        <div 
          className="header-background"
          style={{opacity: opacityValue}} 
        />
        <Link to="/">
          <img src={LogoHeader} alt="Logo do Entre Amigos Gastronomia" />
        </Link>
          <Nav>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/nossos-pratos" activeClassName="active">Nossos pratos</NavLink>
            <NavLink to="/galeria" activeClassName="active">Galeria</NavLink>
            <NavLink to="/eventos" activeClassName="active">Eventos</NavLink>
            <NavLink to="/contato" activeClassName="active">Contato</NavLink>
          </Nav>
        <MenuButton />
      </div>
    </MainHeader>
  );
};

export default Header;
