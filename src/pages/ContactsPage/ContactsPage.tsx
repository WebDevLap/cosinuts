import React from 'react';
import bigLogo from '../../assets/images/big-logo.svg';

export const ContactsPage: React.FC = () => {
  return (
    <section className="contacts">
      <div className="contacts__container _container">
        <h2 className="contacts__title">Контакты</h2>
        <p className="contacts__subtitle">
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
          является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
          безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
          изменений пять веков, но и перешагнул в электронный дизайн.
        </p>
        <div className="contacts__img">
          <img src={bigLogo} alt="bigLogo" />
        </div>
      </div>
    </section>
  );
};
