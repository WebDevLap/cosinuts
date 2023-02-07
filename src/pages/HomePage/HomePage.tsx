import React from 'react';
import { useAppSelector } from '../../store/store';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import qs from 'qs'
import { useNavigate } from 'react-router-dom';

import { Sort } from './components/Sort';
import { HomeHeader } from './components/HomeHeader';
import { Card } from './components/Card';

import { setActiveCategory, setCategoryItems } from '../../store/slices/homeSlice';
import { setCardsIsLoading } from '../../store/slices/homeSlice';
import Skeleton from './components/Skeleton';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const homeSearch = useAppSelector((state) => state.home.homeSearch);
  const categoryItems = useAppSelector((state) => state.home.categoryItems);
  const activeCategory = useAppSelector((state) => state.home.activeCategory);
  const cardsIsLoading = useAppSelector((state) => state.home.cardsIsLoading);
  const [firstQsRender, setFirstQsRender] = React.useState<boolean>(true)

  React.useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))

      if(params.activeCategory){
        dispatch(setActiveCategory(+params.activeCategory))
      }
    }
  }, [])

  React.useEffect(() => {
    if(firstQsRender) {
      setFirstQsRender(false)
      return
    }
    const queryString = qs.stringify({
      activeCategory,
    })

    navigate(`?${queryString}`)
  }, [activeCategory])

  React.useEffect(() => {
    dispatch(setCardsIsLoading(true));
    axios
      .get(
        `https://63ac248e34c46cd7ae78a91a.mockapi.io/cosinuts?${
          activeCategory === 0 ? '' : `category=${activeCategory}`
        }`,
      )
      .then((res) => {
        const ress = res.data.filter((item: { title: any }) => {
          if (item.title.toLowerCase().includes(homeSearch.toLowerCase())) {
            return item;
          }
        });
        return ress;
      })
      .then((res) => dispatch(setCategoryItems(res)))
      .then(() => dispatch(setCardsIsLoading(false)));
  }, [activeCategory, homeSearch]);


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
                {cardsIsLoading
                  ? [...new Array(8)].map(() => <Skeleton />)
                  : categoryItems.map((item, index) => {
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
