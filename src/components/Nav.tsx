import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = {
  name: string;
  link: string;
}

export const Nav: React.FC = () => {
  const navItems: NavItem[] = [
    { name: 'Главная', link: '/' },
    { name: 'Каталог', link: '/catalog' },
    { name: 'О нас', link: '/aboutUs' },
    { name: 'О доставке', link: '/aboutDelivery' },
    { name: 'Наша упаковка', link: '/ourBox' },
    { name: 'Магазины', link: '/shops' },
    { name: 'Контакты', link: '/contacts' },
  ];
  const navAdditional: NavItem[] = [
    { name: 'Избранное', link: '/liked' },
    { name: 'Корзина', link: '/cart' },
  ];

  return (
    <nav className="nav">
      <div className="nav__container _container">
        <ul className="nav__list">
          {navItems.map((item, index) => {
            return (
              <li className="nav__item" key={index} onClick={() => window.scrollTo(0, 0)}>
                <NavLink to={`/cosinuts${item.link}`} className="nav__link">
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="additional__list">
          {navAdditional.map((item, index) => {
            return (
              <li className="additional__item" key={index}>
                <NavLink to={`/cosinuts${item.link}`} className="additional__link" onClick={() => window.scrollTo(0, 0)}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
