import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MainHeader, Nav } from './styles';
import MenuButton from '../MenuButton';
import LogoHeader from '../../assets/images/logo_header.png';

const Header = () => {

  let prevScrollpos = window.pageYOffset;
  console.log(prevScrollpos);

  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    let parentContainer = document.querySelector(".carouselContainer");

    // console.log(parentContainer.offsetHeight);
    // console.log(prevScrollpos, "prev");
    // console.log((currentScrollPos / 100) / 5);
    
    let percentage = parentContainer.offsetHeight / currentScrollPos;
    console.log(percentage);

      if (currentScrollPos > parentContainer.offsetHeight) {
        document.querySelector(".header-container").style.opacity = 0;
      } else {
        // console.log(currentScrollPos, "current");
        document.querySelector(".header-container").style.opacity = currentScrollPos / 500;
      }
      prevScrollpos = currentScrollPos;
    }

  return (
    <MainHeader>
      <div className="container header-container">
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
}

export default Header;
