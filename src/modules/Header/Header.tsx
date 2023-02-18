import React from 'react';
import logo from './assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';

import { setNavIsActive } from '../../store/slices/headerSlice';

type NavType = {
  name: string;
  link: string;
  dataCartTotal?: number;
};

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const navIsActive = useAppSelector((state) => state.header.navIsActive);
  const navRef = React.useRef<HTMLDivElement>(null);
  const navList: NavType[] = [
    { name: 'Главная', link: '/' },
    { name: 'Каталог', link: '/catalog' },
    { name: 'О нас', link: '/aboutUs' },
    { name: 'О доставке', link: '/aboutDelivery' },
    { name: 'Магазины', link: '/shops' },
    { name: 'Контакты', link: '/contacts' },
  ];
  const othersList: NavType[] = [
    { name: '+7 (900) 232 32-32', link: '/' },
    { name: 'Избранное', link: '/liked' },
    { name: 'Корзина', link: '/cart', dataCartTotal: 3 },
  ];

  React.useEffect(() => {
    navIsActive ? document.body.classList.add('hidden') : document.body.classList.remove('hidden');
  }, [navIsActive]);
  return (
    <header className="header">
      <div className="header__container _container">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <div
          ref={navRef}
          onClick={() => {
            dispatch(setNavIsActive(!navIsActive));
          }}
          className={navIsActive ? 'header__burger-menu active' : 'header__burger-menu'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={navIsActive ? 'header__nav active' : 'header__nav'}
          onClick={() => dispatch(setNavIsActive(false))}>
          <ul className="header-nav__nav-list">
            {navList.map((item, index) => {
              return (
                <li className="header-nav__nav-item" key={index}>
                  <NavLink to={item.link} className="header-nav__nav-link" onClick={() => window.scrollTo(0, 0)}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className="header-nav__others-list">
            {othersList.map((item, index) => {
              return (
                <NavLink to={item.link} className="header-nav__others-item" key={index} data-cart-total={item.dataCartTotal}>
                  <span className="header-nav__others-link">{item.name}</span>
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
