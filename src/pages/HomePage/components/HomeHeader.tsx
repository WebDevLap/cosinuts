import React from 'react';

import cosinuts from '../assets/images/cosinuts.png';
import cosinutsMini from '../assets/images/cosinuts-mini.png';

import { setHomeSearch } from '../../../store/slices/homeSlice';
import { useDispatch } from 'react-redux';

export const HomeHeader: React.FC = () => {
  const dispatch = useDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null)

  function inputKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      if(!inputRef.current) return
      dispatch(setHomeSearch(inputRef.current.value));
    }
  }

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
            <input
              type="text"
              ref={inputRef}
              placeholder="Кешью Австралийский"
              onKeyDown={(e: React.KeyboardEvent) => inputKeyDown(e)}
            />
            <span
              onClick={() => {
                window.scrollTo({ top: 1250, left: 0, behavior: 'smooth' });
                if(!inputRef.current) return
                dispatch(setHomeSearch(inputRef.current.value));
              }}></span>
          </div>
        </div>
        <div className="home-page-header__image">
          <img src={cosinuts} alt="cosinuts" />
        </div>
      </div>
    </section>
  );
};
