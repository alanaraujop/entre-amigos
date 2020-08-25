import React from 'react';
import './MenuToggler.scss';

const MenuToggler = props => {
  const { current, toggleMenu } = props;

  return (
    <div className="menu-toggler">
      <button 
        className={`toggle-button ${current === 'entryMenu' ? 'on' : ''}`}
        onClick={() => toggleMenu('entryMenu')}
      >
        Entradas
      </button>
      <button 
        className={`toggle-button ${current === 'mainMenu' ? 'on' : ''}`}
        onClick={() => toggleMenu('mainMenu')}
      >
        Pratos Principais
      </button>
      <button 
        className={`toggle-button ${current === 'dessertsMenu' ? 'on' : ''}`}
        onClick={() => toggleMenu('dessertsMenu')}
      >
        Doces
      </button>
    </div>
  );
};

export default MenuToggler;
