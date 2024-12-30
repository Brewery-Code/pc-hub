import { ReactComponent as LikeIcon } from '../../../../assets/icons/like.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/arrow.svg';
import styles from './Catalog.module.css';
import { useState } from 'react';

export default function Catalog() {
  const [isCatalogActive, setIsCatalogActive] = useState(false);

  const handleMouseEnter = () => setIsCatalogActive(true);
  const handleMouseLeave = () => setIsCatalogActive(false);

  return (
    <div className={styles.catalog}>
      <div
        className={isCatalogActive ? `${styles.catalog__background} ${styles.catalog__background_active}` : styles.catalog__background}
      >
      </div>
      <ul className={styles.catalog__list}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li><li className={styles.category}><LikeIcon />
          <div className={styles.category__title}>Комплектуючі ПК</div>
          <ArrowIcon />
          <div className={styles.subcategory}>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
            <div className={styles.subcategory__item}>
              <div className={styles.subcategory__title}>Lorem ipsum dolor</div>
              <ul className={styles.subcategory__list}>
                <li className={styles.subcategory__link}>Процесори</li>
                <li className={styles.subcategory__link}>Корпуси</li>
                <li className={styles.subcategory__link}>Відеокарти</li>
                <li className={styles.subcategory__link}>Оперативна пам'ять</li>
                <li className={styles.subcategory__link}>SSD накопичувачі</li>
                <li className={styles.subcategory__link}>Системи охолодження</li>
                <li className={styles.subcategory__link}>Блоки живлення</li>
                <li className={styles.subcategory__link}>Материнські плати</li>
              </ul>
            </div>
          </div>
        </li>
        <button className={styles.catalog__open}><ArrowIcon /></button>
      </ul>
    </div>
  );
}
