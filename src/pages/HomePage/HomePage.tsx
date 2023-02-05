import React from 'react';

import { Sort } from './components/Sort';
import { HomeHeader } from './components/HomeHeader';
import { Card } from './components/Card';
import { useAppSelector } from '../../store/store';
import { setCategoryItems } from '../../store/slices/homeSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export const HomePage: React.FC = () => {
  const categoryItems = useAppSelector((state) => state.home.categoryItems);
  const dispatch = useDispatch();
  const activeCategory = useAppSelector(state => state.home.activeCategory)

  React.useEffect(() => {
    axios
      .get(`https://63ac248e34c46cd7ae78a91a.mockapi.io/cosinuts?${activeCategory === 0 ? '' :  `category=${activeCategory}`}`)
      .then((res) => dispatch(setCategoryItems(res.data)));
  }, [activeCategory]);

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
                {categoryItems.map((item, index) => {
                  return <Card {...item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="home-page__nav"></section>
      </div>
    </main>
  );
};
