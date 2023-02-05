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
    document.body.addEventListener('click', function(e){
      dispatch(setNavIsActive(!navIsActive));
    })
  }, [navIsActive]);

  return (
    <header className="header">
      <div className="header__container _container">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <div
          className={navIsActive ? 'header__burger-menu active' : 'header__burger-menu'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={navIsActive ? 'header__nav active' : 'header__nav'}>
          <ul className="header-nav__nav-list">
            <li className="header-nav__nav-item">
              <NavLink to="/cosinuts/" className="header-nav__nav-link">
                Главная
              </NavLink>
            </li>
            <li className="header-nav__nav-item">
              <NavLink to="/cosinuts/catalog" className="header-nav__nav-link">
                Каталог
              </NavLink>
            </li>
            <li className="header-nav__nav-item">
              <NavLink to="/cosinuts/aboutUs" className="header-nav__nav-link">
                О нас
              </NavLink>
            </li>
            <li className="header-nav__nav-item">
              <NavLink to="/cosinuts/aboutDelivery" className="header-nav__nav-link">
                О доставке
              </NavLink>
            </li>
            <li className="header-nav__nav-item">
              <NavLink to="/cosinuts/shops" className="header-nav__nav-link">
                Магазины
              </NavLink>
            </li>
            <li className="header-nav__nav-item">
              <NavLink to="/cosinuts/contacts" className="header-nav__nav-link">
                Контакты
              </NavLink>
            </li>
          </ul>
          <ul className="header-nav__others-list">
            <NavLink to="/cosinuts" className="header-nav__others-item">
              <span className="header-nav__others-link">+7 (900) 232 32-32</span>
            </NavLink>
            <NavLink to="/cosinuts" className="header-nav__others-item">
              <span className="header-nav__others-link">Избранное</span>
            </NavLink>
            <NavLink to="/cosinuts" className="header-nav__others-item" data-cart-total={3}>
              <span className="header-nav__others-link">Корзина</span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
