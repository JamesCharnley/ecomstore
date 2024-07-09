import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';
import { useEffect, useState } from 'react';

export function CategoryCard({imageUrl, title, href, width, height}){
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 
  const defScreenWidth = screenWidth > 700 ? 1900 : screenWidth < 450 ? 450 : 700;
  const defContainerHeight = screenWidth > 700 ? 720 : screenWidth < 450 ? 650 : 520;
  const defTitleFontSize = screenWidth > 1500 ? 34 : screenWidth < 700 && screenWidth > 450 ? 35 : 50;
  const widthRatio = screenWidth / defScreenWidth;

  return (
    <div
      style={{
        height: `${defContainerHeight * widthRatio}px`,
        width: width,
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className={styles.container}
    >
      <Link className={styles.link_wrapper} to={href}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={styles.image}
        ></div>
        <h3
          style={{ fontSize: `${defTitleFontSize * widthRatio}px` }}
          className={styles.title}
        >
          {title}
        </h3>
      </Link>
    </div>
  );
}