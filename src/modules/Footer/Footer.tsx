import React from 'react';

import logo from '../../modules/Header/assets/images/logo.svg'

export const Footer: React.FC = () => {
  const footerList1: string[] = [
    'Сухофрукты',
    'Орехи',
    'Ягоды сушеные',
    'Цукаты',
    'Экзотические сухофрукты',
  ];
  const footerList2: string[] = [
    'Восточные сладости',
    'Семена и бобовые',
    'Снеки',
    'Бакалея',
    'Специи',
  ];
  const footerList3: string[] = [
    'Сухофрукты',
    'Орехи',
    'Ягоды сушеные',
    'Цукаты',
    'Экзотические сухофрукты',
  ];
  const footerList4: string[] = [
    '8 993 313 31 33',
    '8 993 313 31 33',
    'Sychofrycti@Gmail.com',
    'Г. Москва улица кубано набережная 56 литер 2',
  ];

  return (
    <footer className="footer">
      <div className="footer__container _container">
        <ul className="footer__list">
          <h2 className="footer-list__title">Раздел 1</h2>
          {footerList1.map((item, index) => (
            <div key={index} className="footer-list__item">
              {item}
            </div>
          ))}
        </ul>
        <ul className="footer__list">
          <h2 className="footer-list__title">Раздел 2</h2>
          {footerList2.map((item, index) => (
            <div key={index} className="footer-list__item">
              {item}
            </div>
          ))}
        </ul>
        <ul className="footer__list">
        <h2 className="footer-list__title">Раздел 3</h2>
          {footerList3.map((item, index) => (
            <div key={index} className="footer-list__item">
              {item}
            </div>
          ))}
        </ul>
        <ul className="footer__list">
        <h2 className="footer-list__title">Контакты</h2>
          {footerList4.map((item, index) => (
            <div key={index} className="footer-list__item">
              {item}
            </div>
          ))}
        </ul>
        <div className="footer__mobileImg" onClick={(e) => e.target}>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};
