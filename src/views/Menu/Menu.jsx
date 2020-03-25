import React from 'react';
import './Menu.scss';
import Image1 from '../../assets/images/menu/foto-entradas.png';
import Image2 from '../../assets/images/menu/foto-pratos-principais.png';
import Image3 from '../../assets/images/menu/foto-sobremesas.png';
import MenuLogo from '../../assets/images/menu-logo.png';
import { MenuPortrait, MenuList } from '../../components';
import { entryMenu, mainMenu, dessertsMenu } from './MenuLists';

const Menu = () => {

  return (
    <div id="Menu">
      <h2 className="title-page">Para paladares requintados</h2>

      <div className="entry-menu">

        <MenuPortrait 
          photo={Image1}
          alt="Entradas"
          title="Entradas"
          width={'50vw'}
          height={'385px'}
          maxWidth={'565px'}
          minWidth={'450px'}
        />

        <div className="entry-menu-list-container">
          <MenuList 
            list={entryMenu}
            hasDescription={true}
          />
        </div>
        
        <div className="ask-delivery">
          <img src={MenuLogo} alt="Logo Entre Amigos Gastronomia" />
          <a className="ask-delivery-button">Faça o seu pedido</a>
        </div>
      </div>

      <div className="main-menu">

        <MenuPortrait 
          photo={Image2}
          alt="Pratos Principais"
          title="Pratos Principais"
          width={'90vw'}
          height={'385px'}
          maxWidth={'1144px'}
          minWidth={'980px'}
        />

        <div className="main-menu-lists-container">

          <div className="left">
            <MenuList 
              list={mainMenu.slice(0,7)}
              hasDescription={true}
            />
          </div>

          <div className="right">
            <MenuList 
              list={mainMenu.slice(7)}
              hasDescription={true}
            />
          </div>

        </div>

        <div className="desserts-menu">
          <MenuPortrait 
            photo={Image3}
            alt="Doces"
            title="Doces"
            width={'50vw'}
            height={'425px'}
            maxWidth={'620px'}
            minWidth={'550px'}
          />

          <div className="desserts-menu-list-container">
            <MenuList 
              list={dessertsMenu.slice(0,7)}
              hasDescription={true}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Menu;
