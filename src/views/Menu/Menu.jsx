import React, { useState, useEffect } from 'react';
import './Menu.scss';
import {getMenu} from "../../services/menu.service"
const Menu = () => {

  const [menu, setMenu]= useState([]);
  const [local = {}, delivery = {}] = menu;

  useEffect(() => {
    window.scrollTo(0,0);
    (async ()=>{
      const menuData = await getMenu();
      setMenu(menuData)
    })()
  }, []);

  return (
    <div id="Menu">

      <div className="menu-container">
        <h2 className="title-page">Para paladares requintados</h2>
        <p className="description">Trabalhamos com 2 cardápios: o cardápio presencial com pratos exclusivos e criações dos nossos chefs, e o nosso cardápio especial de delivery, que são pratos especialmente dimensionados para entrega com valores e volumes para você ter a experiência do Entre Amigos na sua casa.</p>
        <div className="menu-option-container">
          <a style={{background: `url(${local.image})`}} target="_blank" rel="noopener noreferrer" href={local.link || local.file} className="menu-option">
            <button className="btn-menu-option">{local.buttonText}</button>
          </a>
          <a style={{background: `url(${delivery.image})`}} target="_blank" rel="noopener noreferrer" href={delivery.link} className="menu-option">
            <button className="btn-menu-option">{delivery.buttonText}</button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Menu;
