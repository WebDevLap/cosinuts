import React from 'react';

import bigLogo from '../../assets/images/big-logo.svg'

export const DeliveryPage: React.FC = () => {
  return (
    <div className="delivery">
      <div className="delivery__container _container">
        <h2 className="delivery__title">О доставке</h2>
        <div className="delivery__subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</div>
        <div className="delivery__img">
          <img src={bigLogo} alt="bigLogo" />
        </div>
      </div>
    </div>
  );
};
