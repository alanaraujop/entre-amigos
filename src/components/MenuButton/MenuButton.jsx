import React from 'react';
import './MenuButton.scss';

const MenuButton = props => {
  const { toggleMenuMobile } = props;

  return (
    <div className="menu-button" onClick={toggleMenuMobile}>
      <svg 
        width="18" 
        height="12" 
        viewBox="0 0 18 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" 
          fill="white" 
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
};

export default MenuButton;
