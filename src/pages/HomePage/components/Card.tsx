import React from 'react';

interface CardProps {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  priceWithDiscount: number;
  imageUrl: string;
  category: number;
}

export const Card: React.FC<CardProps> = ({id, title, subtitle, price, priceWithDiscount, imageUrl, category}) => {
  const [inCart, setInCart] = React.useState<boolean>(false)
  const [likeIsActive, setLikeIsActive] = React.useState<boolean>(false)
  
  return (
    <div className="card">
      {
        +((1 - priceWithDiscount / price) * 100).toFixed(0) === 0 ? <span></span> :
        <span className="discount">Скидка {((1 - priceWithDiscount / price) * 100).toFixed(0)}%</span>
      }
      {/* <span className="discount">Скидка {((price-priceWithDiscount)*100).toFixed(2)}%</span> */}
      <div className="card__img">
        <img src={imageUrl} alt="image" />
      </div>
      <div className="card__title">{title}</div>
      <div className="card__subtitle">{subtitle}</div>
      <div className="card__prices">
        <div className="card-prices__price">От {priceWithDiscount.toFixed(2)} Р</div>
        {
          price === priceWithDiscount ? <span></span> : 
          <div className="card-prices__discount">От {price.toFixed(2)} Р</div>
        } {/* если цена и цена со скидкой равны то возвращает обычный span */}
        
      </div>
      <div className="card__buttons">
        <div className="card-buttons__lines">
          <svg
            width="31"
            height="25"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M13.1362 9.76487H20.1754V11.7732H13.1362V14.7857L9.12961 10.769L13.1362 6.75238V9.76487Z"
                fill="#AAAAAA"
                className='svg'
              />
              <path
                d="M7.13145 3.73985V0.727356L11.1381 4.74401L7.13145 8.76066V5.74817H0.0922613V3.73985H7.13145Z"
                fill="#AAAAAA"
                className='svg'
              />
            </g>
          </svg>
        </div>
        <div className="card-buttons__search">
          <svg
            width="24"
            height="25"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.8674 14.1839L10.2528 10.3731C11.1994 9.27123 11.781 7.81402 11.781 6.21052C11.7805 2.78032 9.14346 0 5.89025 0C2.63704 0 0 2.78032 0 6.21052C0 9.64071 2.63704 12.421 5.89025 12.421C7.29586 12.421 8.58505 11.9001 9.5977 11.0341L13.2264 14.86C13.4032 15.0467 13.6902 15.0467 13.867 14.86C14.0443 14.6734 14.0443 14.3706 13.8674 14.1839ZM5.89025 11.4655C3.13768 11.4655 0.906298 9.11277 0.906298 6.21052C0.906298 3.30826 3.13768 0.955524 5.89025 0.955524C8.64284 0.955524 10.8742 3.30826 10.8742 6.21052C10.8742 9.11277 8.64284 11.4655 5.89025 11.4655Z"
              fill="#AAAAAA"
              className="svg"
            />
          </svg>
        </div>
        <div className={likeIsActive ? "card-buttons__like active" : "card-buttons__like"} onClick={() => setLikeIsActive(!likeIsActive)}>
          <svg
            width="30"
            height="28"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.4134 1.76153C17.3781 0.625613 15.9575 0 14.413 0C13.2585 0 12.2012 0.369224 11.2704 1.09733C10.8008 1.46486 10.3752 1.9145 10 2.43932C9.62494 1.91466 9.19922 1.46486 8.7294 1.09733C7.79877 0.369224 6.74149 0 5.58701 0C4.04251 0 2.62177 0.625613 1.58646 1.76153C0.563507 2.88418 0 4.41788 0 6.08032C0 7.79138 0.630341 9.35765 1.98364 11.0096C3.19427 12.4873 4.93423 13.9873 6.94916 15.7243C7.63718 16.3175 8.41705 16.9899 9.22684 17.7061C9.44077 17.8957 9.71527 18 10 18C10.2846 18 10.5592 17.8957 10.7729 17.7064C11.5826 16.99 12.363 16.3173 13.0513 15.7238C15.0659 13.9872 16.8059 12.4873 18.0165 11.0094C19.3698 9.35765 20 7.79138 20 6.08016C20 4.41788 19.4365 2.88418 18.4134 1.76153Z"
              fill="#FEB302"
              className="svg"
            />
          </svg>
        </div>
        <div className={inCart ? "card-buttons__cart active" : "card-buttons__cart"} onClick={() => setInCart(!inCart)}><span>{inCart ? 'Добавлено' : 'В корзину'}</span></div>
      </div>
    </div>
  );
};
