import React from 'react';
import bigLogo from './assets/images/big-logo.svg';

export const AboutPage: React.FC = () => {
  return (
    <section className="about">
      <div className="about__container _container">
        <h2 className="about__title">О нас</h2>
        <p className="about__subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
        <div className="about__logo">
          <img src={bigLogo} alt="bigLogo" />
        </div>
      </div>
    </section>
  );
};
