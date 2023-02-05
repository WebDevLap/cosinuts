import React from 'react';

import { Sort } from './components/Sort';
import { HomeHeader } from './components/HomeHeader';
import { Card } from './components/Card';
import { NavItems } from '../../modules/Header/components/NavItems';

export const HomePage: React.FC = () => {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <HomeHeader />
        <section className="home-page__content">
          <div className="home-page-content__container _container">
            <div className="home-page-content__content">
              <h2 className="home-page-content__title">Наш ассортимент</h2>
              <Sort />
              <div className="home-page-content__cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </section>
        <section className="home-page__nav">
          
        </section>
      </div>
    </main>
  );
};
