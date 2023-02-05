import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavItems = () => {
  const navItems: string[] = ['Главная', 'Каталог', 'О нас', 'О доставке', 'Магазины', 'Контакты'];
  return (
    <div>
      <ul className="header-nav__nav-list">
        {navItems.map((item, index) => {
          return (
            <li className="header-nav__nav-item" key={index}>
              <NavLink to="/" className="header-nav__nav-link">
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
