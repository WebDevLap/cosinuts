import React from 'react';
import logo from './assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { setNavIsActive } from '../../store/slices/headerSlice';
import { useDispatch } from 'react-redux/es/exports';
import { NavItems } from './components/NavItems';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const navIsActive = useAppSelector((state) => state.header.navIsActive);
  const dispatch = useDispatch();
  const othersItems: string[] = ['+7 (900) 232 32-32', 'Избранное', 'Корзина'];

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
          className={navIsActive ? 'header__burger-menu active' : 'header__burger-menu'}
          onClick={() => {
            dispatch(setNavIsActive(!navIsActive));
          }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={navIsActive ? 'header__nav active' : 'header__nav'}>
          <NavItems/>
          <ul className="header-nav__others-list">
            {othersItems.map((item, index) => {
              return (
                <NavLink to="/" className="header-nav__others-item" data-cart-total={3} key={index}>
                  <span className="header-nav__others-link">{item}</span>
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
