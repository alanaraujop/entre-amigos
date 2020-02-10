import React from 'react';
import header from '../../assets/images/header-background.png';
// import logoName from '../../assets/images/logo-name.png';
import logo from '../../assets/images/logo-file.png';

const Header = () => {

  return (
    <div className="header">
      <div className="logoContainer">
        {/* <div className="logoName" style={{backgroundImage: `url(${logoName})`}} /> */}
        <div className="logo" style={{backgroundImage: `url(${logo})`}} />
      </div>
      <div className="headerBackground" style={{backgroundImage: `url(${header})`}} />
    </div>
  );
}

export default Header;
