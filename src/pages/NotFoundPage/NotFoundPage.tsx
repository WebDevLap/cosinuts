import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__container _container">
        <h2 className='not-found-page__title'>Ошибка 404</h2>
        <div className="not-fount-page__img">
          <img src="https://d-element.ru/upload/iblock/883/oblozhka.png" alt="error404Img" />
        </div>
        <h2 className='not-found-page__subtitle'>Извините, страница не найдена. Вы можете перейти на главную страницу сайта</h2>
        <NavLink to='/cosinuts/' onClick={() => window.scrollTo(0,0)} className="not-found-page__btn">Перейти на главную</NavLink>
      </div>
    </div>
  )
}
