import React from 'react';
import bigLogo from '../../assets/images/big-logo.svg'

export const ShopsPage: React.FC = () => {
  return (
    <div className="shops">
      <div className="shops__container _container">
        <h2 className="shops__title">Наши магазины</h2>
        <ul className="shops__list">
          <li className="shops__item">
            <div className="shops-item__img"></div>
            <p className="shops-item__text">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
              является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
              некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя
              Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без
              заметных изменений пять веков, но и перешагнул в электронный дизайн.
            </p>
          </li>
          <li className="shops__item">
            <div className="shops-item__img"></div>
            <p className="shops-item__text">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
              является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
              некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя
              Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без
              заметных изменений пять веков, но и перешагнул в электронный дизайн.
            </p>
          </li>
        </ul>
        <div className="shops__img">
          <img src={bigLogo} alt="bigLogo" />
        </div>
      </div>
    </div>
  );
};
