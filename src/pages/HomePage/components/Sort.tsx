import React from 'react';
import { setActiveCategory } from '../../../store/slices/homeSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/store';

export const Sort: React.FC = () => {
  const categories = [
    'Все',
    'Сухофрукты экзотические',
    'Ягоды сушеные',
    'Цукаты',
    'Восточные сладости',
    'Снеки',
    'Семена бобовые',
    'Бакалея',
  ];

  const activeCategory = useAppSelector(state => state.home.activeCategory)
  const dispatch = useDispatch()
  

  return (
    <>
      <ul className="home-page-content__sort-list">
        {categories.map((item, index) => {
          return (
            <li className="home-page-content__sort-item" key={index}>
              <div onClick={(e: React.MouseEvent) => dispatch(setActiveCategory(index))} className={activeCategory === index ? "home-page-content__sort-link active" : "home-page-content__sort-link"}><span>{item}</span></div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
