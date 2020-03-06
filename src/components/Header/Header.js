import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MainHeader, Nav } from './styles';
import MenuButton from '../MenuButton';
import LogoHeader from '../../assets/images/logo_header.png';

const Header = () => {

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
