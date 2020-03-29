import React from 'react';
import './MenuList.scss';

const MenuList = props => {
  const { list, hasDescription } = props;

  return (
    <ul className="menu-list">
      {!!list && 
        list.map((item, index) => {
          return (
            <li className="menu-list-item" key={index}>
              <span className="item-name">{item.name}</span>
              {hasDescription && <span className="item-description">{item.description}</span>}
            </li>
          )
        })
      }
    </ul>
  );
};

export default MenuList;
