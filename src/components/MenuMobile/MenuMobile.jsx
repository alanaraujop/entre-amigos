import React from 'react';
import './MenuMobile.scss';
import { NavLink } from 'react-router-dom';

const MenuMobile = props => {
  const { show } = props;

  return (
    <div className={`menu-mobile ${show && 'opened'}`}>
      <nav className="menu-mobile-navigation">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/nossos-pratos" activeClassName="active">Nossos pratos</NavLink>
        <NavLink to="/galeria" activeClassName="active">Galeria</NavLink>
        <NavLink to="/eventos" activeClassName="active">Eventos</NavLink>
        <NavLink to="/contato" exact activeClassName="active">Contato</NavLink>
      </nav>
    </div>
  );
};

export default MenuMobile;
