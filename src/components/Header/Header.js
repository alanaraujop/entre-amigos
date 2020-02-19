import React from 'react';
import { MainHeader } from './styles';
import MenuButton from '../MenuButton';
import LogoHeader from '../../assets/images/logo_header.png';

const Header = () => {

  return (
    <MainHeader>
      <img src={LogoHeader} alt="Logo do Entre Amigos Gastronomia" />
      <MenuButton />
    </MainHeader>
  );
}

export default Header;
