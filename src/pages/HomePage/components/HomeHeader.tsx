import React from 'react';
import cosinuts from '../assets/images/cosinuts.png';
import cosinutsMini from '../assets/images/cosinuts-mini.png';

export const HomeHeader: React.FC = () => {
  return (
    <section className="home-page__header">
      <div className="home-page-header__container _container">
        <div className="home-page-header__content">
          <div className="home-page-header__title">
            <span>Dri</span>ed <i>Fruits</i>
          </div>
          <div className="home-page-header__subtitle">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
            является стандартной
          </div>
          <div className="home-page-header__imageInBox">
            <img src={cosinutsMini} alt="cosinuts" />
          </div>
          <div className="home-page-header__cosinutsInBox">
            <img src={cosinuts} alt="cosinuts" />
          </div>
          <div className="home-page-header__search">
            <input type="text" placeholder="Кешью Австралийский" />
          </div>
        </div>
        <div className="home-page-header__image">
          <img src={cosinuts} alt="cosinuts" />
        </div>
      </div>
    </section>
  );
};
